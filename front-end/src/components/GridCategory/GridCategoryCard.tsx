import styles from "./GridCartegory.module.css";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const GridCategoryCard: React.FC = () => {
    return (
        <Link href="/category" className={`${styles.category__card} pl-6 relative `}>
            <div className='w-full h-[500px] relative overflow-hidden rounded-lg'>
                <Image className="object-cover hover:scale-110 transition-all duration-500" src="https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill />
            </div>
            <div className='absolute bottom-[60px] left-0 overflow-hidden'>
                <p className='font-light text-sm bg-white opacity-90 rounded px-2 max-w-fit'>4 products</p>
                <h2 className={`${styles.category__card_title} text-4xl font-semibold mt-4 max-w-fit`}>Iphone</h2>
            </div>
        </Link>
    )
}

export default GridCategoryCard