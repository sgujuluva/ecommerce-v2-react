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
       font-weight:800;

}
img{
    width:100%;
border:2px solid red;
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
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        }
    p{
        line-height:1.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; 
        overflow: hidden; 
    }
}

`;