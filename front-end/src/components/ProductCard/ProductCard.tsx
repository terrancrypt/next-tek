import styles from './productCard.module.css';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RatingStar from '../RatingStar/RatingStar';
import ProductCardButtons from './ProductCardButtons';

const ProductCard: React.FC = () => {
    return (
        <Link href="" className={`${styles.product__card} pl-6 relative rounded-lg overflow-hidden`}>
            <div className='w-full h-[500px] relative overflow-hidden rounded-lg'>
                <Image className='object-cover hover:scale-110 transition-all duration-500' src="https://images.pexels.com/photos/8533360/pexels-photo-8533360.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' fill />
            </div>

            <div className={`${styles.product__card_content} absolute w-full bottom-0 left-0 overflow-hidden`}>
                <div className='pb-8'>
                <RatingStar value={5} />
                <h2 className={`${styles.product__card_title} text-4xl font-semibold mt-2 max-w-fit relative`}>Iphone</h2>
                </div>
               
                <div>
                    <ProductCardButtons />
                </div>
            </div>

        </Link>
    )
}

export default ProductCard