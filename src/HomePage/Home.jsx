// import React from "react";
// import bg_logo from "../../src/assets/anime-slide.png";
// import anime_cute2 from "../../src/assets/Images/anime-cute2.jpg";
// import vd_anime from "../../src/assets/Videos/Solo_Leveling.mp4";
// import CardAnime from "../../src/assets/card-anime.png";
// import LatedEpisode from "./LatedEpisode/LatedEpisode";
// import Populor from "./Populor/Populor";
// import TopView from "./TopView.jsx";
// import TopFavorited from "./TopFavorited/TopFavorited";
// import {GoDotFill, CiFacebook, LiaFacebookMessenger, AiOutlineYoutube, CiTwitter, FaAngleLeft, FaAngleRight} from "../Icons/ReactIcons.jsx";
// const cards = [1, 2, 3, 4, 5, 6, 7];
// const lasteds = [1, 2, 3, 4, 5, 6, 7, 8];
// const Home = () => {
//   return (
//     <div>
//       <div className="slider">
//         <video autoPlay muted loop src={vd_anime}></video>
//       </div>

//       {/* Trending Moives */}
//       <div className=" w-[97%] m-auto h-[300px] ">
//         <div className="w-full h-[70px] flex  items-center mt-10 z-20 relative">
//           <h1 className="ml-5 text-[1.5rem] font-semibold text-green-500">
//             Trending
//           </h1>
//         </div>

//         {/* card Trending movies  */}
//         <div className="h-[215px] flex ml-5 z-1">
//           {cards.map(() => (
//             <div className=" flex ml-4">
//               <div className="bg-gradient-to-t z-20 from-slate-800 to-slate-600 w-[40px] h-full overflow-hidden relative block">
//                 <div>
//                   <p className=" text-white text-start text-[16px] w-[200px] h-[42px] -rotate-90 -ml-20 mt-14 p-2">
//                     Solo leveling
//                   </p>
//                 </div>
//                 <h1 className="text-2xl text-center font-bold text-green-500 w-full h-[33px] absolute bottom-0">
//                   01
//                 </h1>
//               </div>
//               <div className="cursor-pointer w-[143px]">
//                 <img
//                   className="w-full h-full"
//                   src={CardAnime}
//                   alt="anime-card"
//                 />
//               </div>
//             </div>
//           ))}

//           {/* bottun left right for next trending movies */}
//           <div className="w-[40px] ml-6 grid gap-2 grid-rows-1">
//             <div className="bg-slate-700 w-9 h-[103px] rounded-xl flex items-center justify-center cursor-pointer">
//               <FaAngleRight className="text-slate-300 text-[2rem]" />
//             </div>
//             <div className="bg-slate-700 w-9 h-[103px]  rounded-xl flex items-center justify-center cursor-pointer">
//               <FaAngleLeft className="text-slate-300 text-[2rem]" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* description for detell anime movies */}
//       <div className="flex w-[97%] items-center m-auto mt-5">
//         <div className="flex items-center ">
//           <img
//             src={CardAnime}
//             alt="Logo"
//             className="w-20 h-20 ml-5 object-cover rounded-full shadow-lg shadow-black"
//           />
//         </div>
//         <div className="ml-5 border-l-[3px] border-green-500">
//           <h1 className="ml-3 text-[14px] text-lime-400">Share AnimeMovies</h1>
//           <p className="ml-3 text-[14px]">To Your Friends</p>
//         </div>
//       </div>

//       {/* Card new movies */}
//       <div className="bg-slate-420 w-full h-[897PX] flex mt-10 bg-slate-900 ">
//         <div className="w-full h-full flex ml-1">
//           <LatedEpisode />
//           <Populor />
//           <TopView />
//           <TopFavorited />
//         </div>
//       </div>

//       {/* Lasted TV Series */}
//       <div className="w-[100%] h-[864px]  bg-slate-900 relative">
//         <div className=" w-[98.5%] h-[803px] absolute ml-3 mt-10">
//           <div className="w-full h-[40px] flex justify-between items-center text-lime-400">
//             <div className="flex items-center  cursor-pointer">
//               <h1 className="font-semibold text-[1.3rem] ">Lasted TV Series</h1>
//               <FaAngleRight className="ml-2" />
//             </div>
//             <p className="cursor-pointer">Show More</p>
//           </div>

//           {/* Card Lasted TV Series */}
//           <div className="w-full h-[733px] mt-5 ">
//             <div className="w-full h-full grid gap-4 grid-cols-7">
//               {lasteds.map(() => (
//                 <div className="w-[193px] h-[350px] bg-slate-700 rounded-lg">
//                   <img
//                     src={anime_cute2}
//                     alt="card-anime-cute"
//                     className="w-full h-[280px] overflow-hidden object-cover rounded-lg "
//                   />
//                   <div className="w-[193px] h-[60px] ">
//                     <p className="text-center w-[193px] h-[28px] mt-1 text-[13px] text-slate-200">
//                       Anime Title Name and Season anime
//                     </p>
//                     <div className="flex justify-between items-center h-[19px] text-[11px] text-slate-400 mt-4 m-2">
//                       <div className="flex w-1/2 items-center">
//                         <p className="">TV</p>
//                         <GoDotFill className="ml-2 text-[8px]" />
//                         <p className="ml-2">11m</p>
//                       </div>
//                       <div>
//                         <p>2024</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* card lasted movies */}
//       <div className="w-[100%] h-[864px]  bg-slate-900 relative ">
//         <div className=" w-[98.5%] h-[803px] absolute ml-3 mt-10">
//           <div className="w-full h-[40px] flex justify-between items-center text-lime-400">
//             <div className="flex items-center  cursor-pointer">
//               <h1 className="font-semibold text-[1.3rem] ">Lasted Movies</h1>
//               <FaAngleRight className="ml-2" />
//             </div>
//             <p className="cursor-pointer">Show More</p>
//           </div>

//           {/* Card Lasted TV Series */}
//           <div className="w-full h-[733px] mt-5 ">
//             <div className="w-full h-full grid gap-4 grid-cols-7 x">
//               {lasteds.map(() => (
//                 <div className="w-[193px] h-[350px] bg-slate-700 cursor-pointer rounded-lg ">
//                   <img
//                     src={anime_cute2}
//                     alt="card-anime-cute"
//                     className="w-full h-[280px] overflow-hidden object-cover rounded-lg"
//                   />
//                   <div className="w-[193px] h-[60px] ">
//                     <p className="text-center w-[193px] h-[28px] mt-1 text-[13px] text-slate-200">
//                       Anime Title Name and Season anime
//                     </p>
//                     <div className="flex justify-between items-center h-[19px] text-[11px] text-slate-400 mt-4 m-2">
//                       <div className="flex w-1/2 items-center">
//                         <p className="">TV</p>
//                         <GoDotFill className="ml-2 text-[8px]" />
//                         <p className="ml-2">11m</p>
//                       </div>
//                       <div>
//                         <p>2024</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer end  */}
//       <div className="w-full h-[70vh] bg-black  flex justify-evenly items-center ">
//         <div className="w-[30%] h-[250px] flex justify-center">
//           <div className="ml-10">
//             <h1 className="text-[20px] font-bold text-gray-400">ទំព័របន្ថែម</h1>
//             <h2 className="text-[17px] font-bold font-serif">Facebooks</h2>
//             <ul className="ml-14 text-[15px] ">
//               <li>
//                 <a href="" className="hover:text-green-400 text-gray-200">
//                   Facebook Page
//                 </a>
//               </li>
//               <li>
//                 <a href="" className="hover:text-green-400 text-gray-200">
//                   Facebook Group
//                 </a>
//               </li>
//             </ul>
//             <h2 className="text-[17px] font-bold font-serif">Telegrams</h2>
//             <ul className="ml-14">
//               <li className="hover:text-green-400 text-gray-200">
//                 <a href="">Telegram Group</a>
//               </li>
//               <li className="hover:text-green-400 text-gray-200">
//                 <a href="">Telegram Chenel</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="w-[30%] h-[250px]  justify-center">
//           <div>
//             <h1 className="text-[20px] font-bold text-gray-400">
//               Stay Connected
//             </h1>
//             <p className="text-[15px] text-gray-200">
//               សូមចែករំលែកការស្រឡាញ់មួយនេះ
//             </p>
//             <div className="text-[30px] mt-2">
//               <div className="flex ">
//                 <CiFacebook className="text-blue-700" />
//                 <p className="ml-3 text-[20px] text-gray-200 hover:text-blue-500 cursor-pointer">
//                   Facebook
//                 </p>
//               </div>
//               <div className="flex">
//                 <LiaFacebookMessenger className=" text-blue-600" />
//                 <p className="ml-3 text-[20px] text-gray-200 hover:text-blue-500 cursor-pointer">
//                   Messenger
//                 </p>
//               </div>
//               <div className="flex">
//                 <AiOutlineYoutube className="text-red-600" />
//                 <p className="ml-3 text-[20px] text-gray-200 hover:text-red-600 cursor-pointer">
//                   Youtube
//                 </p>
//               </div>
//               <div className="flex">
//                 <CiTwitter className="text-cyan-500" />
//                 <p className="ml-3 text-[20px] text-gray-200 hover:text-cyan-500 cursor-pointer">
//                   Twitter
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-[30%] h-[250px] flex items-center ">
//           <div>
//             <h1 className="text-[2.5rem] font-serif font-bold text-red-600">
//               AnimeMovei
//             </h1>
//             <p className="text-[14px] font-mono font-bold text-green-400">
//               © AnimeMovie, 2024 All rights reserved.
//             </p>
//             <p className="text-[14px] font-mono font-bold text-green-400">
//               Copyright © 2024 Meng Piseth
//             </p>
//             <span className="text-[12px]">
//               TVFullHD ជាគេហទំព័រ
//               ខ្មែរមួយដែលចេញពីការស្រឡាញ់ភាពយន្តរបស់អ្នកបង្កើត Website នេះពិតៗ
//               បងប្អូននឹងមានទំនុកចិត្តក្នុងការកម្សាន្តភាពយន្តដោយសេរី មិនគិតប្រាក់
//               ព្រោះម្ចាស់ Website
//               នេះបង្កើតវាឡើងគ្មានក្នុងគោលបំណងជាប្រយោជន៍ផ្ទាល់ខ្លួនគិតតែពីលុយៗៗ
//               នឹង បំផ្លាញគេ ដូច Website បង្កប់មេរោគ ផ្សេងៗដែលយកឈ្មោះជា website
//               ខ្មែរមកទាញប្រយោជន៍ពីអ្នកមើលឡើយ
//               និយាយទៅគឺគ្មានបេះដូងសុទ្ធតែជាការសម្តែង សូមចងចាំថា TVFullHD ប្រើ
//               Domain យកពាក្យ TV ផ្ដើមមុន ដាច់ខាតមិនយកពាក្យ TV
//               មកដាក់ចុងក្រោយដូចគេដ៏ទៃឡើយ
//               (ប្រយោជន៍រួមជាធំមិនកេងបន្លំអូសប្រយោជន៍ផ្ទាល់ខ្លួន)
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
