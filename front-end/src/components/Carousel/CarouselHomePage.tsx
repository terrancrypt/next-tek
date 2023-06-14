'use client'

import { Carousel } from 'flowbite-react';
import React from 'react'
import { dataCarousel } from './dataCarousel';
import Image from 'next/image';


const CarouselHomePage: React.FC = () => {
  return (
    <Carousel>
      {dataCarousel.map((item, index)=>(
        <div className='w-full h-full relative' key={index}>
          <Image src={item.imgUrl} alt={item.title} fill className='object-cover'/>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselHomePage