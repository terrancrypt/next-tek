'use client'

import { Carousel } from 'flowbite-react';
import React from 'react'
import { dataCarousel } from './dataCarousel';
import Image from 'next/image';
import Button from '../Button/Button';


const CarouselHomePage: React.FC = () => {
  return (
    <div className="h-[800px] w-full">
<Carousel 
    slideInterval={10000} 
    indicators={false}
    leftControl={<img src='/icons/chevron-left.svg' className='w-12 h-12'/>}
    rightControl={<img src='/icons/chevron-right.svg' className='w-12 h-12'/>}
    >
      {dataCarousel.map((item, index)=>(
        <div className='w-full h-full relative' key={index}>
          <Image src={item.imgUrl} alt={item.title} fill className='object-cover'/>
          <div className='absolute h-full left-[200px] top-0 flex flex-col justify-between py-[100px]'>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded cursor-pointer border max-w-fit">{item.tag}</span>
            <h2 className='text-[40px] w-[100px] font-bold capitalize my-3'>{item.title}</h2>
            <Button btnText="See more" btnClass='bg-black text-white mt-2'></Button>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
    
  )
}

export default CarouselHomePage