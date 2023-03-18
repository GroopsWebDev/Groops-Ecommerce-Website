import { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ReactPaginate from "react-paginate";

var page = 1;
var perPage = 10;
var type = "NoFilter";
var categoryType = "";

const productListPage: NextPage = () => {
  const [productData, setProductData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const [pageOffset, setPageOffset] = useState(0);
  const [page, setPage] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const apiUrl = "http://localhost:3000/api/";
  const endPointURl = "https://api.gr-oops.com";

  const handleFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    getList(page, perPage, (type = "Filter"), event.target.value);
  };

  const [place, setPlace] = useState("");

  const handlePlace = (event: SelectChangeEvent) => {
    setPlace(event.target.value);
  };

  const pagginationHandler = (event: any) => {
    setPageOffset(event.selected);
    getList(event.selected, perPage, type, categoryType);
  };

  async function getList(
    pageType: any,
    perPageType: any,
    type: any,
    categoryType: any
  ) {
    setLoading(true);
    let rObj;
    if (type == "Filter") {
      rObj = {
        categoryName: categoryType,
        sortBy: "desc",
      };
    } else {
      rObj = {
        page: pageType + 1,
        perPage: perPageType,
      };
    }
    const response = await fetch(apiUrl + "product/pagination", {
      method: "POST",
      body: JSON.stringify(rObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.status == 200) {
      setLoading(false);
      setPageCount(json.count);
      setProductData(json.data);
    } else {
      setLoading(false);
      setPageCount("");
      setProductData([{}]);
    }
  }
  useEffect(() => {
    getList(page, perPage, type, categoryType);
    getCategoryList();
    async function getCategoryList() {
      const response = await fetch(apiUrl + "category/getList");
      const json = await response.json();
      if (json.status == 200) {
        setCategoryList(json.data);
      }
    }
  }, []);
  return (
    <>
      <h1 className="mt-20 mb-20 text-center text-purple-600">Product List</h1>
      <div className="mb-5 flex flex-row justify-center space-x-10">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="filter">Filter by</InputLabel>
          <Select
            className="w-40"
            labelId="filter"
            id="filter"
            value={filter}
            onChange={handleFilter}
            label="Age"
          >
            {categoryList &&
              categoryList.map((list: any, index: any) => (
                <MenuItem key={index} value={list.name}>
                  {list.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      {loading ? (
        <div className="text-center">
          <CircularProgress style={{ color: "black" }} />
        </div>
      ) : (
        <>
          <div className="row">
            {productData &&
              productData.map((list: any, index: any) => (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="relative mb-10 overflow-hidden rounded-lg bg-white text-2xl shadow-lg">
                      <Link href={`/admin/product/view/${list.skuid}`}>
                        <img
                          src={endPointURl + "/" + list.image}
                          className="h-64 w-full object-cover object-center"
                        />
                      </Link>
                      <div className="mr-6 mb-2 mt-1 flex flex-row gap-16 text-xs">
                        <div className="flex flex-col space-y-0">
                          <p className="ml-3  text-blue-400">
                            {list.englishProductName}
                          </p>
                          <p className="ml-3 ">Price:${list.price}</p>
                          <p className="ml-3 ">
                            Available Stock : {list.stock}
                          </p>
                          <p className="ml-3 mb-3 ">
                            Description : {list.description}
                          </p>
                          <div className="row text-center">
                            <div className="col-md-4">
                              <Link href={`/admin/product/view/${list.skuid}`}>
                                <button className="btn btn-success">
                                  View
                                </button>
                              </Link>
                            </div>
                            <div className="col-md-4">
                              <Link
                                href={`/admin/product/update?id=${list.skuid}`}
                              >
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
                            </div>
                            {/* <div className="col-md-4">
                              <button className="btn btn-danger">Delete</button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            <div style={{ marginLeft: "40%" }}>
              <ReactPaginate
                nextLabel="next >"
                onPageChange={pagginationHandler}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={+pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                forcePage={pageOffset}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default productListPage;
