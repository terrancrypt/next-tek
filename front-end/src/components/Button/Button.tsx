'use client'

import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  btnText: string
  btnType?: "submit",
  btnClass?: string,
  url?: string
}

const Button: React.FC<ButtonProps> = ({ btnText, btnType, btnClass, url }) => {
  return (
    <Link href={url || ""}>
      <button type={btnType || "button"}
        className={`${btnClass} focus:outline-none font-medium px-5 py-2.5 mr-2 mb-2 hover:bg-white hover:text-black border border-black transition-all`}>
        {btnText}
      </button>
    </Link>

  )
}

export default Button