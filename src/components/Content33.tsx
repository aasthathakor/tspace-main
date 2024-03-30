import React from 'react'
import Image from 'next/image';

interface propsType {
    title:  string;
    img:    string;
    desc:   string;
}
const Content33: React.FC<propsType> = ({title,img,desc}) => {
  return (
    <div className="min-[320px]:px-2 py-2 bg-[#1C1C1C] border border-[#262626] rounded-xl box-border shadow-lg items-center">
    <div className='min-[320px]:flex-col text-center gap-2'>
        <p className='justify-center pt-5'>{title}</p>
        <Image 
          className=''
          src={img}
          width={297}
          height={4}
          alt='img'
          />
    </div>
      
        <p className='text-[14px] text-[#B3B3B3] pt-3'>{desc}</p>
        </div>
  )
}

export default Content33