import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

const MainLayout = () => {
  return (
    <main className="skymart-app min-h-screen w-full flex flex-col items-center">
      <ScrollRestoration />
      <Navbar />
      <CartSidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
