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

function Home() {
  const [userInput, setUserInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleClick = () => {
   const filterItems = data.filter(item => item.title.toLowerCase().includes(userInput));
   setFilteredItems(filterItems)
      };

console.log("filtereed array items", filteredItems)

  const [prodType, setProdType] = useState("all");

  let location = useLocation(); //navigating the signup page to home page

  //fetching data from api
  const { data, isLoading, error } = useQuery("products", fetchApi);
  //filtering items
  let prodAll = data;
  prodType !== "all" &&
    (prodAll = data.filter((item) => item.category === prodType));

  if (isLoading) return <LinearProgress />;
  if (error) return <p>Oops,Something Went Wrong!!!</p>;

  console.log(prodType);

  return (
    <Wrapper>

      <Header userInput = {userInput} handleSearch = {handleSearch } handleClick = {handleClick} data= {data} setProdType={setProdType} />

      <div className="banner-image">
        <span>eCommerce-Shopping</span>
      </div>
      <Grid container spacing={2}>
        {
       ( filteredItems.length > 0) ? filteredItems.map((item) => (
            <Grid item key={item.id} xs={6} sm={3}>
              <Products prod={item} />
            </Grid>
          )) : 
          prodAll.map((item) => (
            <Grid item key={item.id} xs={6} sm={3}>
              <Products prod={item} />
            </Grid>
          ))
          /*  :
        data?.filter(item => item.category === (prodType)).map((item) => (
          <Grid item key={item.id} xs={6} sm={3}>
            <Products prods={item} handleAddToCart={handleAddToCart} />
          </Grid>
        )) */
        }
      </Grid>
    </Wrapper>
  );
}

export default Home;
