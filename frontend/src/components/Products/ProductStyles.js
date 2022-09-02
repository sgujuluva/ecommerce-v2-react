import styled from "styled-components";
export const WrapperProd = styled.div`
display:flex;
justify-content:space-evenly;
flex-direction:column;
width:100%;
border:2px solid grey;
border-radius:25px;
height:100%;

button{
    border-radius:20px;
    background-color:orange;
    width:30%;
    font-weight:800;
}
img{
    width:100%;
max-height:450px;
object-fit:contain;
border-radius:25px;
}
div{
    padding:1%;
    height:100%;
    h3{
        font-size:1.3rem;
    }
    p{
        line-height:1.5rem;
    }
}

`;