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

      <div className="min-[320px]:flex flex-col justify-center items-center">
          <div className="large:flex extraL:flex space-x-4 ">
            <div className="min-[320px]:flex space-x-3">
              <div className="min-[320px]:flex space-x-1 small:w-1/2">
                <Image src="/Icon.png" width={20} height={20} alt="" className="" />
                <h1 className="small:overflow-auto text-[14px] text-[#FFFFFF] large:text-[18px] extraL:text-[18px]">
                  hello@skillbirdge.com
                </h1>
              </div>

              <div className="flex space-x-1 small:w-1/2 ">
                <Image src="/Icon (1).png" width={20} height={20} alt=""  />
                <h1 className="small:overflow-auto text-[14px] text-[#FFFFFF] large:text-[18px] extraL:text-[18px]">
                  +919181323235
                </h1>
              </div>
            </div>

            <div className="small:mt-[15px] medium:mt-[15px]">    
            <div className="flex space-x-1  justify-center text-[#FFFFFF] items-center ">
              <Image src="/Icon (2).png" width={20} height={20} alt="" />
              <h1 className="text-[14px] large:text-[18px] extraL:text-[18px]">
                Somewhere in the World
              </h1>
            </div>
            </div>
          </div>
        </div>



      <div className="py-5">
        <Image src="/Line.png" width={1596} height={0} alt="line" />
      </div>

      {/* third section */}
      <div className="min-[320px]:border-[1px] border-[rgb(38,38,38)] bg-[rgb(26,26,26)] rounded-[12px]  
      pt-[50px] px-[24px]  pb-[30px]">

    <div className="min-[320px] px-4">

  <div className="min-[320px]:flex justify-center space-x-[8px]">
    <Image src="/Button.png"     alt="" width={44} height={44} />
    <Image src="/Button (1).png" alt="" width={44} height={44} />
    <Image src="/Button (2).png" alt="" width={44} height={44} />
  </div>

    <div>
    <div className="pt-[30px] small:pt-[10px] medium:pt-[10px]">
    <h1 className="text-[rgb(173,179,179)] text-[14px] justify-center">
      YourBank All Rights Reserved
    </h1>
    </div>

    <div className="pt-[30px] small:pt-[10px] medium:pt-[10px]">
    <h1 className="text-[rgb(173,179,179)] text-[14px] justify-center">
      Privacy Policy | Terms of Service
    </h1>
    </div>
</div>
</div>
</div>
</div>
  </>


  );
};

export default Footer;