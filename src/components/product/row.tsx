import { LeftButton, RightButton, Filter } from "../others/buttons";
import Link from "next/link";
import Arrow from "@public/assets/icons/arrow.svg";
import Heart from "@public/assets/icons/heart.svg";
import ProductCard from "./card";
import { useAuth } from "@clerk/nextjs";
import { api } from "~/utils/api";

interface Props {
  section_category: string;
}

const Row: React.FC<Props> = ({ section_category }) => {
  const { userId } = useAuth();
  const ctx = api.useContext();
  const {
    data: products,
    isLoading: loadingproducts,
    refetch,
  } = api.product.getAllProducts.useQuery();

  const { mutate: addToCartMutation, isLoading: isAdding } = api.cart.addCartItem.useMutation({
    onSuccess: () => {
      void ctx.cart.getUserCartItems.invalidate();
    },
    onError: (e) => {
        console.log(e);
    },
  });

  const { mutate: reduceFromCartMutation, isLoading: isReducing } = api.cart.reduceCartItem.useMutation({
    onSuccess: () => {
      void ctx.cart.getUserCartItems.invalidate();
    },
    onError: (e) => {
        console.log(e);
    },
  });

  const handleAddItem = async (skuid:string) => {

    if(!userId) return console.log('no user id')

    await addToCartMutation({
        user_Clerk_id: userId,
        product_id: skuid,
        quantity: 1,
        });
    refetch();
    };

    const handleReduceItem = async (skuid:string) => {
        if(!userId) return console.log('no user id')

        await reduceFromCartMutation({
            user_Clerk_id: userId,
            product_id: skuid,
            });
        refetch();
    };

  return (
    <>
      <div className="z-0 p-10 bg-white">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className=" text-2xl">{section_category}</h1>
            <div className="flex flex-row gap-x-2 pt-2">
              <Filter category="snack" />
              <Filter category="Instant Food" />
              <Filter category="Personal Care" />
              <Filter category="Beauty" />
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Link href="" className="mr-5 flex items-center text-rose-600">
              <p className="mr-2">see all</p>
              <Arrow />
            </Link>

            <LeftButton />
            <RightButton />
          </div>
        </div>

        <div className="mt-10 flex flex-row items-center justify-between">
          <ProductCard _on_discount={false} _one_plus={false} _mouse_enter={false} _sold_out={false}/>
          <ProductCard _on_discount={false} _one_plus={false} _mouse_enter={true} _sold_out={false}/>
          <ProductCard _on_discount={true} _one_plus={true} _mouse_enter={false} _sold_out={false}/>
          <ProductCard _on_discount={false} _one_plus={false} _mouse_enter={false} _sold_out={false}/>
          <ProductCard _on_discount={false} _one_plus={false} _mouse_enter={false} _sold_out={true}/>
        </div>
      </div>
    </>
  );
};

export default Row;
