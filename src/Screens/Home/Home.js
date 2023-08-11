import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import HeroSection from "./components/HeroSection";
import useFetch from "../../Hooks/useFetch";
import useFetchAndPost from "../../Hooks/useFetchAndPost";
import VendorCard from "./components/VendorCard";
import Wrapper from "../../Utlilities/Wrapper";

function Home() {
  //csutom - fetch hook
  const { error, isPending, data } = useFetch(
    process.env.REACT_APP_URL + "/front/"
  );
  console.log(data, "categories data");
  const wrapperHeight = "10vh";
  return (
    <>
      <Wrapper wrapperHeight={wrapperHeight} />
      <HeroSection />
      <CategoryList homeData={data?.data?.categories} />
      {/* <VendorCard /> */}
    </>
  );
}

export default Home;
