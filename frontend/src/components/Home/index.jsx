import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

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

  const [prodType, setProdType] = useState("all");

  let location = useLocation();

  //fetching data from api
  const { data, isLoading, error } = useQuery("products", fetchApi);
let prodAll = data;
(  prodType !== "all") && (prodAll = data.filter(item => item.category === (prodType)) )

  if (isLoading) return <LinearProgress />;
  if (error) return <p>Oops,Something Went Wrong!!!</p>;
  console.log(prodType)
  return (
    <Wrapper>

      <Header  setProdType = {setProdType}/>

      <div className="banner-image">
        <span>eCommerce-Shopping</span>
      </div>
      <Grid container spacing={2}>

        {prodAll.map ((item) => (
          <Grid item key={item.id} xs={6} sm={3}>
            <Products prods={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))
       /*  :
        data?.filter(item => item.category === (prodType)).map((item) => (
          <Grid item key={item.id} xs={6} sm={3}>
            <Products prods={item} handleAddToCart={handleAddToCart} />
          </Grid>
        )) */}
      </Grid>
    </Wrapper>
  );
 
}

export default Home;
