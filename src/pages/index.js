import Image from "next/image";
import { Inter } from "next/font/google";
// import  Image  from "next/image";

import Butt from "../components/Butt";
import Dropdown from "@/components/Dropdown";
import data from "@/components/data";
import Search from "@/components/Search";
import { useState } from "react";
import Dusun from "@/components/Dusun";

import Logo from "@public/Logo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let altitude;
  //Check Query params

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-col items-center md:justify-center w-full h-1/4 pb-3 text-white  bg-gradient-to-r from-sky-800 from-10%   to-green-600 to-80%">
          <h1 className="text-xl font-bold text-center uppercase mt-3">
            {" "}
            Selamat Datang{" "}
          </h1>
          <div className="flex  h-3/5 space-x-2  w-4/5 sm:justify-center md:w-1/4 mt-4">
            <div className="h-full w-20">
              <Image src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="flex flex-col ms-2 w-full h-full -space-y-1 mt-1">
              <p className="text-sm font-semibold"> Peta Desa </p>
              <h1 className="text-lg font-bold uppercase">Desa Wonorejo</h1>
              <p className="text-sm font-thin"> Kecamatan Polokarto</p>
              <p className="text-sm font-thin ">
                {" "}
                Kabupaten Sukoharjo - Jawa Tengah
              </p>
              <p className="text-sm font-semibold"></p>
            </div>
          </div>
          <div className="flex flex-col items-center "></div>
        </div>
        <div className="flex flex-col items-center w-full h-3/4">
          <Butt />
          <Dusun />
        </div>
      </div>
    </>
  );
}
