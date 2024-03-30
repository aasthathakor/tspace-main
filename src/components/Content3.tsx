import React from 'react'
import Content33 from './Content33'

const menuData = [
    {
        
        title:  "How do I open an account with YourBank?",
        img:    "/Line.png",
        desc:   "Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
    },
    {
        
        title:  "What documents do I need to provide to apply for a loan?",
        img:    "/Line.png",
        desc:   "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
        
        title:  "How can I access my accounts online?",
        img:    "/Line.png",
        desc:   "Accessing your accounts online is simple and secure. Visit our website and click on the Login button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the Enroll Now button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
    },
    {
        
        title:  "Are my transactions and personal information secure?",
        img:    "/Line.png",
        desc:   "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
    ]


const Content3 = () => {
  return (
        
    <>
    <div className='px-1 py-8'>

        <p className="min-[320px]:text-center min-[320px]:text-2xl lg:text-5xl sm:text-3xl text-[#CAFF33] sm:text-center">Frequently <span className='lg:text-5xl sm:text-3xl text-[#FFFFFF] sm:text-center'>Asked Questions</span>
         </p>

        <p className="min-[320px]:text-center min-[320px]:text-sm text-[#B3B3B3] pt-1 text-lg sm:text-center">
        Still you have any questions? Contact our Team via support@yourbank.com
          </p>
    </div>

    

<div className='grid w-fit mx-auto px-2 sm:grid-cols-2 gap-5 pt-8 text-white'>
{menuData.map((item, index) => (
    <Content33 
    key={index}
    title={item.title}
    img={item.img as string}
    desc={item.desc}
    />
))}
</div>

<div className='flex flex-col justify-center items-center py-0'>
<button className="dark:md:hover:bg-[#1C1C1C] w-[193px] h-[63px] text-center border border-[#262626] rounded-full  text-[#FFFFFF] ...">
  Load All FAQ's v
</button>
    </div>
    </>

  )
}

export default Content3