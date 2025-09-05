import React from "react";
import { Outlet } from "react-router";
import { AdminHeader as Header } from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
