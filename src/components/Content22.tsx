import React from 'react'
import Image from 'next/image';


interface propsType {
    img:    string;
    title:  string;
    desc:   string;
}

const Content22: React.FC<propsType> = ({img,title,desc}) => {
    return (
        <div className=" p-2 bg-[#1C1C1C] border border-[#262626] rounded-xl box-border shadow-lg items-center space-x-4">
      <div className='min-[320px]:flex gap-2'>
          <Image 
          className='w-[80px] h-[80px]'
          src={img}
          width={80}
          height={80}
          alt='img'
          />
          <span className='justify-center pt-5'>{title}</span>
      </div>
        
          <p className='text-[14px] text-[#B3B3B3] pt-3'>{desc}</p>
          </div>
        
    
  )
}

export default Content22