import React from "react";
import { useRouter } from 'next/router';

import Category from "../../components/product/category";
import Welcome from "../../components/welcome";
import Row from "../../components/shop/row"
import HelpCenter from "../../components/help/help-center"


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Shop = () => {

  const Block = () => {

    const [filter, setFilter] = React.useState('');

    const handleFilter = (event: SelectChangeEvent) => {
      setFilter(event.target.value);
    };

    const [place, setPlace] = React.useState('');

    const handlePlace = (event: SelectChangeEvent) => {
      setPlace(event.target.value);
    };

    return <>
      <div className="flex flex-row justify-center space-x-10">

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="filter">Filter by</InputLabel>
          <Select className = "w-40"
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
          <Select className = "w-40"
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

      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
    </>
  }


  const router = useRouter();
  const { type } = router.query;

  return <>

    <Category />

    <Welcome />

    <h1 className="text-purple-600 text-center mt-20 mb-20">{type}</h1>

    <Block />

    <div className="flex justify-center mt-20">
      <button className="bg-black w-40 hover:scale-110 text-white font-bold py-2 px-4 square">More</button>
    </div>
    <HelpCenter />
  </>
}

export default Shop;