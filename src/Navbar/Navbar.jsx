import { AlignJustify, Monitor, Search } from "lucide-react";
import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaFacebook, FaRandom, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
