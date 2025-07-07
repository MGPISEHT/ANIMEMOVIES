import React from "react";
import Sidebar from "../Navbar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
const HomePage = () => {
  return (
    <div className="h-screen  bg-black text-white flex flex-col overflow-y-hidden justify-between">
      <div className="max-w-full h-full bg-black text-white  flex gap-2 overflow-hidden">
        <Sidebar />
        <div className="bg-slate-900 w-full overflow-auto h-full  ">
          <Navbar />
          <div className="overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
