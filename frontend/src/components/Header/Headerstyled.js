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
  
    width:25%;
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
      border-radius:25px;

}
.search-button button{
   padding:4%;
   border-radius:25px;
}
`;