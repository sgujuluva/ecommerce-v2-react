import styled from "styled-components";
export const WrapperProd = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 10px;
  border-radius: 25px;

  button {
    border-radius: 20px;
    background-color: orange;
    font-weight: 800;
  }
  img {
    width: 80%;
    height: 20vh;

    object-fit: contain;
    margin-left: 10%;
    border-radius: 25px;
  }
  .prod-details {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 1.3rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    p {
      width: 100%;

      line-height: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
