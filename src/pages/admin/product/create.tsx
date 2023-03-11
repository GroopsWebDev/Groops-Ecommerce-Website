import trpc from '../../api/trpc/[trpc]';
import { useRouter } from 'next/router'
import { title } from 'process'
import { NextPage } from 'next';
import { ValueType } from 'tailwindcss/types/config';
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';

const productUploadPage: NextPage = () => {
    const { data: sessionData } = useSession();
    const [categoryList, setCategoryList] = useState([])
    const apiUrl = "http://localhost:3000/api/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [productData, setProductData] = useState({
        productImage: "",
      });
    const handleProfilePictureChange = (e: any) => {
        const file = e.target.files[0];
        setProductData({
          ...productData,
          productImage: URL.createObjectURL(file),
        });
      };
      
    async function onSubmit(data: any) {
        try {
                data.skuid = sessionData?.user?.lastname + Date.now();
                data.alcohol = data.alcohol == "true"
                data.price = parseInt(data.price)
                data.retailPrice = parseInt(data.retailPrice)
                data.costPrice = parseInt(data.costPrice)
                data.stock = parseInt(data.stock)
                data.categoryId = parseInt(data.categoryId)
                data.image = "img/success.png"
                const response = await fetch(apiUrl + "product/create", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                    "Content-Type": "application/json",
                    },
                });
                if(response.status == 200)
                {
                    alert("Your Product Created Successfully")
                }
            } catch (err) {
                alert(err);
            }
    }  
    // const mutation = trpc.product.upload.mutation(['product.mutation', {
    //     onSuccess: () => {
    //         console.log('success')
    //     }
    // }]);
    // const router = useRouter();
    // const hello = trpc.useQuery(['example.hello', { name: 'from trpc' }]);
    useEffect(()=>{
         getList()
         async function getList()
         {
            const response = await fetch(apiUrl + 'category/getList')
            const json = await response.json()
            if(json.status == 200)
            {
                setCategoryList(json.data)
            }
         }   
    },[])
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mb-3" style={{border:"1px solid #e0e0e0"}}>
                    <h1 className="mb-6 text-2xl font-bold">Create Product</h1>
                    <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="mx-6 w-1/2 pr-8">
                                <div className="mr-4 h-32 w-32 overflow-hidden shadow-sm" style={{width:"200%"}}>
                                    <img
                                    src={productData.productImage}
                                    alt=""
                                    className="h-full w-full object-cover"
                                    />
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-6">
                                <label className="focus:shadow-outline mt-2 cursor-pointer rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none">
                                    Choose Image
                                    <input
                                    type="file"
                                    className="hidden"
                                    name="profilePicture"
                                    onChange={handleProfilePictureChange}
                                    />
                                </label>
                               
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="englishProductName"
                            className="block text-sm font-medium text-gray-700"> Product Name (English)
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("englishProductName", {
                                    required: true,
                                })}
                                type="text"
                                name="englishProductName"
                                id="englishProductName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.englishProductName && (
                                <span>This field is required</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="chineseProductNName"
                            className="block text-sm font-medium text-gray-700"> Product Name (Chinese)
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("chineseProductNName", {
                                    required: true,
                                })}
                                type="text"
                                name="chineseProductNName"
                                id="chineseProductNName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.chineseProductNName && (
                                <span>This field is required</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="frenchProductNName"
                            className="block text-sm font-medium text-gray-700"> Product Name (French)
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("frenchProductNName", {
                                    required: true,
                                })}
                                type="text"
                                name="frenchProductNName"
                                id="frenchProductNName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.frenchProductNName && (
                                <span>This field is required</span>
                             )}
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <label htmlFor="placeOfOrigin"
                            className="block text-sm font-medium text-gray-700"> Place Of Origin
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("placeOfOrigin", {
                                    required: true,
                                    pattern: /^[A-Za-z]+$/,
                                })}
                                type="text"
                                name="placeOfOrigin"
                                id="placeOfOrigin"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.placeOfOrigin && (
                                <span>This field is required and text enter only</span>
                             )}
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <label htmlFor="productWeight"
                            className="block text-sm font-medium text-gray-700"> Product Weight 
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("productWeight", {
                                    required: true,
                                    pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="productWeight"
                                id="productWeight"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.productWeight && (
                                <span>This field is required and enter number only</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="alcohol"
                            className="block text-sm font-medium text-gray-700"> Alcohol 
                            </label>
                            <div className="mt-1">
                            <select className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" {...register("alcohol", {
                                    required: true,
                                })}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>   
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="price"
                            className="block text-sm font-medium text-gray-700"> Price 
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("price", {
                                    required: true,
                                    pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="price"
                                id="price"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.price && (
                                <span>This field is required and enter number only</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="categoryId"
                            className="block text-sm font-medium text-gray-700"> Category
                            </label>
                            <div className="mt-1">
                             <select className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  {...register("categoryId", {
                                    required: true,

                                })}>
                                <option value="">--Select Category--</option>    
                                {
                                    categoryList.map( (list) =>
                                    <option value={list.id}>{list.name}</option>
                                    )
                                }
                                
                             </select>   
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="retailPrice"
                            className="block text-sm font-medium text-gray-700"> Retail Price 
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("retailPrice", {
                                    required: true,
                                    pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="retailPrice"
                                id="retailPrice"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.retailPrice && (
                                <span>This field is required and enter number only</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="costPrice"
                            className="block text-sm font-medium text-gray-700"> Cost Price 
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("costPrice", {
                                    required: true,
                                    pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="costPrice"
                                id="costPrice"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.costPrice && (
                                <span>This field is required and enter number only</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="stock"
                            className="block text-sm font-medium text-gray-700"> Stock 
                            </label>
                            <div className="mt-1">
                            <input
                                {...register("stock", {
                                    required: true,
                                })}
                                type="text"
                                name="stock"
                                id="stock"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.stock && (
                                <span>This field is required</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="description"
                            className="block text-sm font-medium text-gray-700"> Description
                            </label>
                            <div className="mt-1">
                            <textarea
                                {...register("description", {
                                    required: true,
                                })}
                                rows="3"
                                name="description"
                                id="description"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors.description && (
                                <span>This field is required</span>
                             )}
                            </div>
                        </div>
                        <div className="col-md-12 pt-4 text-right">
                            <button
                            type="submit"
                            className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            Submit
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            {/* <main>
                <form>
                    <input type="text" className='bg-violet-100' name="title" placeholder="Title" />

                    <input type="text" name="description" placeholder="Description" />
                    <input type="text" name="price" placeholder="Price" />
                    <input type="text" name="image" placeholder="Image" />
                    <input type="text" name="category" placeholder="Category" />
                    <button type="submit">Submit</button>
                </form>
            </main> */}
        </>

    );
};

export default productUploadPage;
