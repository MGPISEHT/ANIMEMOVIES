import React from "react";
import { Shuffle, Undo2 } from "lucide-react";
const links = [1,1,1,1,1,1,1,1,1,1,1,1];
const Sidebar = () => {
  return (
    <div className="w-[15%] h-full bg-slate-900 overflow-auto hidden">
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
  );
};

export default Sidebar;
