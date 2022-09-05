import Styled from "styled-components"

export const Wrapper = Styled.div`
background-color:orange;
padding:1%;
display:flex;
justify-content : space-evenly;
align-items:center;
a{
    text-decoration:none;
    color:black;
    font-size:1.5rem;
    font-weight:800;
}
.search-item{  
    border:2px solid red;
    width:40%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
 }
.search, .search-button{
    padding:2%;
    font-weight:800;
}
.search input{
      padding:4%;    

}
.search-button button{
   padding:4%;

}
.shopping-basket{
    display:flex;
    justify-content:center;
    align-items : center;
}
.shopping-basket img{
    width:20%;
    padding:5%;
    }
    .shopping-basket span{
       font-weight:800;
        }
`;