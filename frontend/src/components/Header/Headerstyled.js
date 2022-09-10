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
    font-size:1.2rem;
    font-weight:800;
}
select{
    padding:0.5%;
    outline:none;
}
.header-search {
     width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-search input {
    width: 85%;
    font-size: 1rem;
    border-radius: 25px;
    padding: 1%;
    border:none;
    outline:none;
  }
  .header-search .search-icon {
    background : white;
    font-size: 1rem;
    border-radius: 25px;
    
    border:none;
  }
.shopping-basket{
    display:flex;
    justify-content:center;
    align-items : center;
}
.shopping-basket a{

  width:30%;
    padding:1%;
    }
    .shopping-basket img{
    width:100%;
        }
h3{
   font-size:1.2rem;
   display:flex;
   justify-content:center;
 align-items:center;
}
`;
