import Heart from '@public/assets/icons/heart.svg';

const ProductCard = () => {
  return <>
  
    <div className="flex flex-col flex-wrap justify-start bg-red-500">

      <div className="w-full overflow-hidden">
        <img src="/assets/dummy/product.png" alt="Image Description" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between mt-5 gap-x-5">
        <p>company name</p>
        <button>
          <Heart className="w-5" />
        </button>
      </div>

      <p className="mt-5 text-lg">Product name</p>

      <p className="text-xl font-bold text-rose-600 pt-5">$ 20</p>

    </div>
  </>
}

export default ProductCard;