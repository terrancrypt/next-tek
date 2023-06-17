"use client"

import { Rating } from 'flowbite-react';
import React from 'react'

interface RatingStarProps {
  value: 1 | 2 | 3 | 4 | 5;
}

const RatingStar: React.FC<RatingStarProps> = ({ value }) => {
  const stars = [];

  for (let i = 0; i < value; i++) {
    stars.push(<Rating.Star key={i} />)
  }

  return (
    <Rating>
      {stars}
    </Rating>
  )
}

export default RatingStar