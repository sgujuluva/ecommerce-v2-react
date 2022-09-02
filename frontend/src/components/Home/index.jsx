import React,{useQuery, useState} from 'react';
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//styles
import "./Home.css"
import {Wrapper} from "./StyledCompHome";

//api

const fetchApi = async() => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await(response.json());
  console.log(data)
}
fetchApi();
function Home() {
  return (
    <div>Home</div>
  )
}

export default Home