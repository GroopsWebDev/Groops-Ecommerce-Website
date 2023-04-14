import trpc from "../../api/trpc/[trpc]";
import { useRouter } from "next/router";
import { title } from "process";
import { NextPage } from "next";
import { ValueType } from "tailwindcss/types/config";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ImageUploader } from "../../../utils/imageUpload";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import ProductForm from "./create";

const ProductEditPage = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState();
  const [productData, setProductData] = useState({});
  const productId = router.query.id;
  const apiUrl = "http://localhost:3000/api/";
  useEffect(() => {
    if (productId != undefined) {
      getProductData();
      async function getProductData() {
        const response = await fetch(
          apiUrl + "product/getById?id=" + productId
        );
        const json = await response.json();
        if (json) {
          setProductData(json);
        } else {
          setProductData("");
        }
      }
    }
  }, [productId]);
  return (
    <>
      <ProductForm productId={productId} singleProductData={productData} />
    </>
  );
};

export default ProductEditPage;
