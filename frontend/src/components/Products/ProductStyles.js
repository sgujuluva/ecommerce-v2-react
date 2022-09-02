import styled from "styled-components";
export const WrapperProd = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
box-shadow: 0 0 10px;
border-radius:25px;
padding:2%;

button{
    border-radius:20px;
    background-color:orange;
    width:30%;
    font-weight:800;
    margin-left:40%;
}
img{
    width:100%;
max-height:300px;
margin:3% 0;
object-fit:contain;
border-radius:25px;
}
.prod-details{
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3{
        font-size:1.3rem;
        }
    p{
        line-height:1.5rem;
    }
}

`;