import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//comp
import Products from "../Products/index"
//styles
import "./Home.css";
import { Wrapper } from "./StyledCompHome";

//api

const fetchApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

function Home() {
  const { data, isLoading, error } = useQuery("products", fetchApi);

  if (isLoading) return <LinearProgress />;
  if (error) return <p>Oops,Something Went Wrong!!!</p>;

  return( 
  <div>
    {data.map(item => <li><Products prods ={item}/></li>)}
  </div>
  );
}

export default Home;
