import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer: React.FC = () => {
  return (
    <footer className='container mx-auto pt-20'>
      <FooterTop/>
      <FooterBottom/>
    </footer>
  )
}

export default Footer