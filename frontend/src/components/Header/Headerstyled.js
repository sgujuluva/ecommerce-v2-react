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
