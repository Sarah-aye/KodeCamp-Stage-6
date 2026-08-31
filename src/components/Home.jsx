import React from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import LandingPage from "./LandingPage";
import TodayProduct from "./TodayProduct";
import TopHeader from "./topHeader";
import ThisMonth from "./ThisMonth";
import LowerMiddle from "./LowerMiddle";
import AllProducts from "./AllProducts";
import FeaturedToday from "./featured";
import BottomComponent from "./BottomComponent";
import ScrollUp from "./ScrollUp";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <LandingPage />
        <br />

        <TodayProduct />
        <br />

        <Categories />
        <br />
        <ThisMonth />
        <br />
        <LowerMiddle />
        <br />
        <AllProducts />
        <br />

        <FeaturedToday />
        <br />
        <BottomComponent />
        <br />
        <ScrollUp />
        <br />
      </div>
    </div>
  );
};

export default Home;
