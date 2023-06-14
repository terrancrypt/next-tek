import { ParamsProps } from '@/types'
import React from 'react'

const BlogDetailPage = ({params}: ParamsProps) => {
  return (
    <div>{params.slug}</div>
  )
}

export default BlogDetailPage