import React from "react";
import TopSection from "./components/TopSection";
import FundRaiserCards from "./components/FundRaiserCards";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
  return (
    <>
      <TopSection />
      <FundRaiserCards />
      <ToastContainer />
    </>
  );
};

export default HomePage;
