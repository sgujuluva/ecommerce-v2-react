import Styled from "styled-components";

export const Wrapper = Styled.div`
background-color:orange;
padding:1%;

.header-styling{
    display:flex;
    justify-content : space-around;
    align-items:center;
}
a{
    text-decoration:none;
    color:black;
    font-size:1.5rem;
    font-weight:800;
}
select{
    padding:0.5%;
    outline:none;
}
.header-search {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .header-search input {
    width: 75%;
    font-size: 1rem;
    border-radius: 25px;
    padding: 1.5%;
    border:none;
    outline:none;
  }
  .header-search .search-icon {
    background : white;
    font-size: 1.2rem;
    border-radius: 25px;
    padding: 0.5%;
    border:none;
  }
.shopping-basket{
    display:flex;
    justify-content:center;
    align-items : center;
}
.shopping-basket a{

  width:35%;
    padding:1%;
    }
    .shopping-basket img{
    width:100%;
        }
`;
