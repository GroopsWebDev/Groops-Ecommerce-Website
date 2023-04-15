import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Category from "../../components/product/category";
import Welcome from "../../components/welcome";
import HelpCenter from "../../components/help/help-center";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import ProductList from "../../components/product/ProductList";


const Shop = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { type } = router.query;
  const perPage = 10;

  const loadMore = ( ) => {
       const perPage = 10; 
  };
  
  
  const Block = () => {
    const [filter, setFilter] = React.useState("");
    const handleFilter = (event: SelectChangeEvent) => {
      setFilter(event.target.value);
    };

    const [place, setPlace] = React.useState("");
    const handlePlace = (event: SelectChangeEvent) => {
      setPlace(event.target.value);
    };

    
    return (
      <>
        <div className="flex flex-row justify-center space-x-10">
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
              <MenuItem value={"PHL"}>Price: High to Low</MenuItem>
              <MenuItem value={"PLH"}>Price: Low to High</MenuItem>
              <MenuItem value={"RHL"}>Rating: High to Low</MenuItem>
              <MenuItem value={"RLH"}>Rating: Low to High</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Place of Product</InputLabel>
            <Select
              className="w-40"
              value={place}
              onChange={handlePlace}
              label="Age"
            >
              <MenuItem value={"china"}>China</MenuItem>
              <MenuItem value={"korea"}>Korea</MenuItem>
              <MenuItem value={"japan"}>Japan</MenuItem>
            </Select>
          </FormControl>
        </div>

        <ProductList type={type} filter={filter} perPage= {perPage} />
      </>
    );
  };

   
  return (
    <>
      <Category />

      <Welcome />
      <h1 className="mt-20 mb-20 text-center text-purple-600">{type}</h1>
      <Block />

      <div className="mt-20 flex justify-center">
        <button className="square w-48 bg-black py-2 px-4 font-bold text-white transform transition duration-300 hover:scale-110" onClick={loadMore}>
          <div className="text-2xl">More</div>
        </button>
      </div>
      <HelpCenter />
    </>
  );
};

export default Shop;
