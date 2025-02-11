import React from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import OrderSection from "../components/OrderSection";

const OrderPage = () => {
  return (
    <div className='bg-[#25394d] min-h-screen w-full'>
      <MenuBar />
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[70px] pb-[50px]">
        <OrderSection />
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
