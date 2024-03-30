import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="min-[320px]:box-border border-[#262626] pt-1 bg-[#1C1C1C] rounded-xl shadow-lg items-center space-x-4">
      <div className="pt-10 flex justify-between items-center">
        <div className="pt-10 flex justify-between p-6 mx-auto items-center space-x-1">
          <Image
            className="h-12 w-12"
            src="/shape-30.png"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="lg:text-xl sm:text-sm font-medium text-[#FFFFFF]">
            YourBanK
          </span>
        </div>
      </div>

      <div className="pt-5">
        <ul className="flex gap-3 justify-center text-[#FFFFFF] mb-5 md:text-center">
          <li>Home</li>
          <li>Careers</li>
          <li>About</li>
          <li>Security</li>
        </ul>
      </div>

      <div className="py-5 ">
        <Image src="/Line.png" width={1596} height={0} alt="line" />
      </div>

      <div className="min-[320px]:text-center gap-2 lg:flex justify-center py-5 text-[#FFFFFF]">
        <Image src="/Icon.png" width={20} height={20} alt="email" />
        <span>hello@skillbirdge.com</span>
        <Image src="/Icon (1).png" width={20} height={20} alt="email" />
        <span>+91 91813 24309</span>
        <Image src="/Icon (2).png" width={20} height={20} alt="email" />
        <span>Somewhere in the World</span>
      </div>

      <div className="py-5">
        <Image src="/Line.png" width={1596} height={0} alt="line" />
      </div>

      <div className="pt-5 pb-6 border border-[#262626] rounded-full mb-12 pl-10 pr-10 flex justify-between items-center bg-[#1A1A1A] ">
        <div className="sm:mt[-2px] flex pt-3 gap-8 text-[#CAFF33] text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <ul className="md:flex flex-row  gap-10 items-center font-light text-[16px] text-white">
          <li>YourBank All Right Reserved</li>
        </ul>
        <ul className="md:flex flex-row  gap-5 items-center font-light text-[16px] text-white">
          <li>Privacy Policy | Terms of Service</li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Footer