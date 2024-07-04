import { useState } from "react";
import Web3 from "web3";
import LoginCard from "./LoginCard";
import styled from "@emotion/styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  return (
    <StyledDiv>
      <LoginCard />
      <ToastContainer />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

export default LoginPage;
