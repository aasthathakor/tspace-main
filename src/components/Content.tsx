import React from 'react'
import Image from 'next/image';

const Content = () => {
  return (
    <>
    <div className="bg-[#1C1C1C] flex justify-center items-center">
{/*       
      <div className='flex flex-col lg:flex-row justify-end'>
        <img
        src='Abstract Design.png'
        alt='image'
        className='w-48 h-44 -z-0'
        /> */}

        <div className='min-[320px]:flex flex-col'>
            <img src='Image.jpg' alt='image' className='min-[320px]:h-64 w-80' style={{borderRadius: "16px"}} />
        
        <div
          className="min-[320px]:flex flex-col bg-[#1A1A1A] lg:absolute 
          lg:left-10 md:left-10 rounded-[20px_0px_60px_20px] filter backdrop-filter"
          style={{
            
            maxWidth: "329px",  
            minHeight: "302px", 
            padding: "60px",
            alignContent: "center"
          }}
          > 
          
          <p
            className="min-[320px]:text-center text-3xl text-[#FFFFFF] font-Lexend">
            Your Security is Our<br></br>
            
            <span className="text-[#CAFF33] text-3xl leading-3 font-Lexend">
            Top Priority
          </span>
          </p><br></br>
           <p className="text-[#B3B3B3] text-center text-sm font-Lexend">
          At YourBank, we understand the importance of keeping your financial information secure. 
          We employ robust security measures and advanced technologies to protect your personal and financial data. 
          Rest assured that when you bank with us, your security is our utmost priority.
          </p>
        </div>
      </div>
      </div>

    
          <div className='min-[320px]:py-1 space-x-3 space-y-3'>
        <p className="min-[320px]:text-3xl min-[320px]:text-center text-[#FFFFFF] lg:text-5xl sm:text-3xl sm:text-center">How We <span className='text-[#CAFF33] lg:text-5xl sm:text-3xl'>Protect You</span>
         </p>

        <p className="min-[320px]:text-center min-[320px]:text-sm text-[#B3B3B3]">
        At YourBank, we prioritize the security and confidentiality of your financial information. 
        Our state-of-the-art encryption technology and stringent data protection measures ensure your
        assets and transactions are safeguarded at all times.
          </p>
          </div>

      </>
      // </div>
    


  );
}

export default Content
