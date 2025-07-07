import React from "react";

import anime_cute from "../../assets/Images/anime-cute.jpg";
import { GoDotFill } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";

const cardTopViews = [1, 2, 3, 4, 5];
const TopView = () => {
  return (
    <div>
      <div className="w-[370px] bg-white ml-1.5 mt-1">
        <table className="text-black w-full h-full">
          <tr className="">
            <td className="bg-slate-600 w-[370px] h-[48px] flex items-center px-5 font-sans font-semibold text-lime-400">
              <h1>Top Viewed</h1>
            </td>
          </tr>
          <tr>
            {cardTopViews.map(() => (
              <div>
                <td className="w-[370px] h-[80px] flex items-center px-5 bg-slate-700 ">
                  <div className="cursor-pointer">
                    <img
                      src={anime_cute}
                      alt="anime-title"
                      className="w-[45px] h-[60px] rounded-md"
                    />
                  </div>
                  <div className="px-4">
                    <h1 className="font-semibold text-[14px] text-slate-300 cursor-pointer hover:text-lime-400 transition duration-100 ease-in-out">
                      Movie Season
                    </h1>
                    <div className="flex items-center text-xs py-1 text-slate-400">
                      <p>TV</p>
                      <GoDotFill className="text-[7px] ml-1 " />
                      <p className="ml-1">2024-05-30</p>
                    </div>
                  </div>
                </td>
                <td className="w-[370px] h-[80px] flex items-center px-5 bg-slate-800">
                  <div className="cursor-pointer">
                    <img
                      src={anime_cute}
                      alt="anime-title"
                      className="w-[45px] h-[60px] rounded-md"
                    />
                  </div>
                  <div className="px-4">
                    <h1 className="font-semibold text-[14px] text-slate-300 cursor-pointer hover:text-lime-400 transition duration-100 ease-in-out">
                      Movie Season
                    </h1>
                    <div className="flex items-center text-xs py-1 text-slate-400">
                      <p>TV</p>
                      <GoDotFill className="text-[7px] ml-1 " />
                      <p className="ml-1">2024-05-30</p>
                    </div>
                  </div>
                </td>
              </div>
            ))}
            <td className="w-[370px] h-[45px] text-slate-400 flex items-center px-5 bg-slate-700 justify-center cursor-pointer hover:text-lime-400 transition duration-100 ease-in-out">
              <p className="text-[15px]">Views More</p>
              <GrFormNext className="text-xl" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TopView;
