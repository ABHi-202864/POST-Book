import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection imageUrl="assets/kite.png" productTitel="Kite" productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <RightSection imageUrl="assets/console.png" title="Console" des="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" />
      <LeftSection imageUrl="assets/coin.png" productTitel="Coin" productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <RightSection imageUrl="assets/kiteconnect.png" title="Kite Connect API" des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" />
      <LeftSection imageUrl="assets/varsity.png" productTitel="Varsity mobile" productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <Universe />
    </>
  )
}

export default ProductsPage;