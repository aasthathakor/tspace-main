import React from 'react'
import Content22 from './Content22'

const menuData = [
    {
        img:    "/Icon Container.png",
        title:  "Secure Online Banking Platform",
        desc:   "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    },
    {
        img:    "/Icon Container (1).png",
        title:  "Multi-Factor Authentication",
        desc:   "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
    },
    {
        img:    "/Icon Container (2).png",
        title:  "Fraud Monitoring",
        desc:   "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
    },
    {
        img:    "/Icon Container (3).png",
        title:  "Secure Mobile Banking",
        desc:   "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
    },
    ]

const Content2 = () => {
  return (


    <div className='min-[320px]:grid w-fit px-2 sm:grid-cols-2 gap-10 pt-8 text-white'>
    {menuData.map((item, index) => (
        <Content22 
        key={index}
        img={item.img as string}
        title={item.title}
        desc={item.desc}
        />
    ))}
</div>

    
  )
}

export default Content2