import trpc from "../../../api/trpc/[trpc]";
import { useRouter } from "next/router";
import { title } from "process";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import {
  AiFillHeart,
  AiFillMinusSquare,
  AiOutlineHeart,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Spinner } from "react-bootstrap";

const ProductViewPage = () => {
  const [product, setProduct] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const productId = router.query.id;

  const apiUrl = "http://localhost:3000/api/";
  const endPointURl = "https://api.gr-oops.com";

  useEffect(() => {
    if (productId) {
      setLoading(true);
      async function fetchData() {
        const response = await fetch(
          apiUrl + "product/getById?id=" + productId
        );
        const json = await response.json();
        if (json.status == 200) {
          setProduct(json.product);
          setLoading(false);
        } else {
          alert("product not found");
        }
      }

      fetchData();
    }
  }, [productId]);
  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <img
              alt="product image"
              src={endPointURl + "/" + product?.image}
              className="mb-4 w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <h1 className="mb-2 text-3xl font-semibold">
              {product?.englishProductName}
            </h1>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Place Of Origin : {product?.placeOfOrigin}
              </span>
            </div>
            <p className="mb-2 text-base text-gray-700">
              {product.description}
            </p>
            <p className="mb-2 text-base text-gray-700">
              {product?.category?.name}
            </p>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Price : $ {product?.price}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Cost Price : $ {product?.costPrice}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Retail Price : $ {product?.retailPrice}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Product Weight : {product?.productWeight} KG
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                Stock : {product?.stock}
              </span>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default ProductViewPage;
