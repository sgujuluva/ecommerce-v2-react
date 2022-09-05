import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Banner from "../../images/banner1.png";
//comp
import Products from "../Products/index";
//styles
import "./Home.css";
import { Wrapper } from "./StyledCompHome";

//api
const fetchApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};
//handleAddToCArt
const handleAddToCart = () => {};

function Home() {
  
  let location = useLocation();

  //fetching data from api
  const { data, isLoading, error } = useQuery("products", fetchApi);

  if (isLoading) return <LinearProgress />;
  if (error) return <p>Oops,Something Went Wrong!!!</p>;

  return (
    <Wrapper>
      <div className="banner-image">
        <span>eCommerce-Shopping</span>
      </div>
      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={6} sm={3}>
            <Products prods={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Home;
