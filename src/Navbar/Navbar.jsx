import { AlignJustify, Monitor, Search } from "lucide-react";
import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaFacebook, FaRandom, FaTelegram } from "react-icons/fa";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  return (
    <div className="flex w-full h-screen bg-slate-900 absolute">
      <div className="w-[15%] h-full bg-slate-900 overflow-auto">
        <div>
          <div className="flex mt-3 ml-3 bg-slate-800 w-[90px]  p-2 rounded-3xl text-[15px] hover:bg-slate-600 transition ease-in-out duration-300 cursor-pointer overflow-hidden">
            <Undo2 className="size-5 mr-1 " />
            <h1>Menu</h1>
          </div>
          <div className="flex items-center mt-5 ml-3">
            <div className="w-[40%] h-[40px]  text-black  ">
              <Shuffle className="size-5 ml-5 text-slate-400 hover:text-slate-200 cursor-pointer  " />
              <span className="text-[13px] text-slate-400 font-semibold text-center">
                Random
              </span>
            </div>
            <div className=" h-[40px] w-[60%] ">
              <div className="flex justify-center items-center w-[90px] ml-5">
                <div className="w-[40%] bg-green-500 flex items-center text-black">
                  <span className="ml-2 cursor-pointer">EN</span>
                </div>
                <div className="w-[40%] bg-red-50 flex items-center text-black">
                  <span className="ml-2 cursor-pointer">JP</span>
                </div>
              </div>
              <p className="font-semibold text-[13px] text-slate-400">
                Language Name
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="font-semibold text-[15px] text-gray-300  ">
              {links.map(() => (
                <ul className="bg-slate-800 p-3 border-b-[1px] border-gray-500 hover:bg-slate-700 hover:text-white transition ease-in-out duration-150">
                  <li>ទំព័រដើម</li>
                </ul>
              ))}
            </div>
            <div>
              <ul className="bg-slate-800 p-3 text-slate-300  border-b-[1px] border-gray-500 hover:bg-slate-700 hover:text-white transition ease-in-out duration-150">
                <li>Season</li>
              </ul>
              <div className="grid gap-4 grid-cols-2  p-3 bg-slate-800 border-b-[1px] border-gray-500">
                <h1 className="text-red-400">Fall</h1>
                <h1 className="text-green-500">Summer</h1>
                <h1 className="text-yellow-500">Spring</h1>
                <h1 className="text-blue-500">Winter</h1>
              </div>
            </div>
            <div className="h-[300px]">
              <ul className="bg-slate-800 p-3 text-slate-300 hover:bg-slate-700 hover:text-white transition ease-in-out duration-150">
                <li>Genre</li>
              </ul>
              <div className="grid gap-4 grid-cols-2  p-3 bg-slate-800 border-b-[1px] border-gray-500">
                <h1 className="text-red-400">Action</h1>
                <h1 className="text-green-500">Adventure</h1>
                <h1 className="text-yellow-500">Animation</h1>
                <h1 className="text-blue-500">Comedy</h1>
                <h1 className="text-red-400">Drama</h1>
                <h1 className="text-green-500">Family</h1>
                <h1 className="text-yellow-500">Fantasy</h1>
                <h1 className="text-blue-500">Mystery</h1>
                <h1 className="text-yellow-500">Sci-Fi</h1>
                <h1 className="text-blue-500">Science Fiction</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[70px] bg-slate-800 m-auto flex items-center fixed top-0  z-40">
          <div className="ml-4">
            <AlignJustify className="font-bold size-8 cursor-pointer" />
          </div>
          <div id="animemovie-logo" className="ml-[3rem] text-[2rem] ">
            <h1>AnimeMovie</h1>
          </div>
          <div className="text-slate-500 text-[1rem] w-[350px] h-[40px] relative bg-red-500 ml-[5rem]">
            <input
              className="w-full h-full  text-[15px] pl-3"
              type="search"
              name="search"
              id="search"
              placeholder="Search anime ..."
            />
            <div className="absolute bottom-0 right-0 top-0 flex items-center">
              <Search className="size-[1.3rem] mr-3 cursor-pointer" />
              <h1 className="bg-slate-700 text-white cursor-pointer  p-[5px] rounded-sm text-[12px] flex items-center mr-2">
                ជម្រើស
              </h1>
            </div>
          </div>
          <div className="w-[124px] h-[40px] ml-[5rem] flex ">
            <div className="w-[40%] grid grid-rows-1 text-slate-500">
              <h1>Join</h1>
              <h1>Now</h1>
            </div>
            <div className="w-[60%] h-full flex justify-evenly items-center text-slate-600">
              <FaFacebook className="size-[85%] cursor-pointer hover:text-[#1877F2]" />
              <FaTelegram className="size-[85%] cursor-pointer hover:text-[#0088cc]" />
            </div>
          </div>
          <div className="flex items-center w-[560px] h-[40px] ml-[3rem]">
            <div className=" w-[25%] grid grid-rows-1 cursor-pointer">
              <BiSolidMoviePlay className="ml-[35%] size-6 text-yellow-400" />
              <h1 className="text-[13px]">ប្រភេទរឿងដុំ​ - Movies</h1>
            </div>
            <div className="w-[25%] grid grid-rows-1 ml-2 cursor-pointer">
              <Monitor className="text-yellow-400 ml-[40%]" />
              <h1 className="text-[13px]">ប្រភេទរឿងភាគ -Series</h1>
            </div>
            <div className="w-[20%] grid grid-rows-1 ml-2 cursor-pointer">
              <FaRandom className="ml-[35%] size-6 text-yellow-400 " />
              <h1 className="text-[13px]">រើសដោយស្វ័យប្រវត្ត</h1>
            </div>
            <div className="w-[20%] grid grid-rows-1 ml-2">
              <div className="flex items-center justify-center">
                <h1 className="bg-green-500 w-7 text-center h-6 cursor-pointer">
                  EN
                </h1>
                <h1 className="bg-gray-500 w-7 text-center h-6 cursor-pointer">
                  JP
                </h1>
              </div>
              <h1 className="text-[13px]">ភាសាចំណងជើង</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
