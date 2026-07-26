import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
