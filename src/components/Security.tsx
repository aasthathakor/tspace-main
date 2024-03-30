"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Security = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
  
    <div className='max-sm:w-80 h-16 max-laptop:w-10 max-laptop:px-10 border border-[#262626] flex justify-between items-center bg-[#1C1C1C] rounded-full '>
        <div className="container flex justify-between items-center">
          <div className="flex items-center text-xl md:text-2xl font-bold">
            
            <img src="shape-30.png" alt="Logo" className="h-6 w-6" />
            
            <span className="text-[#FFFFFF] w-16">YourBanK</span></div>

          <div className="hidden md:flex mx-auto tracking-wider no-underline">
            <Link href="/" className="no-underline px-4 py-2 text-[#FFFFFF]">Home</Link>
            <Link href="/" className="no-underline px-4 py-2 text-[#FFFFFF]">Careers</Link>
            <Link href="/" className="no-underline px-4 py-2 text-[#FFFFFF]">About</Link>
            <Link href="/" className="px-4 py-2 border border-transparent bg-[#262626] text-white rounded-full">Security</Link>
          </div>

          <div className="hidden md:flex gap-5">
            <Link href="/signup"
              className="px-4 py-2 border border-transparent bg-custom-green rounded-full text-[#FFFFFF]"
            >Sign Up</Link>
            
            <Link
              href="/login"
              className="px-4 py-2 w-20 text-center border border-transparent bg-[#CAFF33] text-black rounded-full duration-0"
            >Login</Link>
            </div>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              size={28} className="md:hidden block text-white cursor-pointer" />
          ) : (
            <FiMenu
              onClick={() => setToggle(!toggle)}
              size={28} className="md:hidden text-black bg-[#CAFF33] rounded-full w-11 h-7 cursor-pointer" />
          )}
        </div>

        
        <div
          className={`duration-300 sm:hidden flex flex-col w-[70%] h-screen  fixed bg-black/70 text-white top-[60px] ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <Link href="/" className="no-underline p-3">Home</Link>
          <Link href="/products" className="no-underline p-3">Careers</Link>
          <Link href="/categories" className="no-underline p-3">About</Link>
          <Link href="/services" className="no-underline p-3">Security</Link>

          <div className="flex items-center justify-center gap-4 p-3">
          <Link href="/signup"
              className="px-4 py-2 border border-transparent bg-custom-green 
              rounded-full hover:bg-[#CAFF33] hover:text-black transition-colors duration-300">Sign Up</Link>
          <Link href="/login"
              className="px-4 py-2 border border-transparent bg-custom-green
               rounded-full hover:bg-[#CAFF33] hover:text-black transition-colors duration-300">Login</Link>

          </div>
        </div>
      </div>
  </>
  );
};

export default Security;

