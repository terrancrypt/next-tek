import Link from 'next/link'
import React from 'react'

const linkNav = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Shop",
        path: "/shop"
    },
    {
        title: "About Us",
        path: "/about"
    },
    {
        title: "Blog",
        path: "/blog"
    },
]

const iconArr = ["/icons/search.svg", "/icons/heart.svg", "/icons/user.svg", "/icons/cart.svg"]

const Header: React.FC = () => {
    return (
        <header className='fixed top-0 left-0 z-20 w-full bg-white border-b'>
            <div className='h-[70px] container mx-auto flex justify-between items-center py-[20px]'>
                <div>
                    <Link href='/' className='flex items-center'>
                        <img src="/favicon.ico"
                            alt="apple logo"
                            className='w-[30px] h-[30px]' />
                        <h1 className='text-xl font-bold ml-2 mt-1 tracking-wider'>NEXT<span className='text-orange-500 italic'>TEK</span></h1>
                    </Link>
                </div>
                <nav>
                    <ul className='flex gap-8 text-lg font-medium'>
                        {linkNav.map((link, index) => (
                            <li key={index} className='hover:scale-90'>
                                <Link href={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex gap-4'>
                    {iconArr.map((icon, index) => (
                        <div className='border rounded-full p-2 cursor-pointer hover:scale-90transition-all'>
                            <img src={icon} alt="" key={index} className='w-6 h-6' />
                        </div>

                    ))}
                </div>
            </div>

        </header>
    )
}

export default Header