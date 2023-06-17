'use client'

import styles from './productCard.module.css';
import { Tooltip } from 'flowbite-react'
import React from 'react'

const ProductCardButtons: React.FC = () => {
    return (
        <div className='pl-6 rouder-lg'>
            <div className='mt-2 bg-white border rounded-b-lg'>
                <div className='w-full flex items-center justify-center overflow-hidden'>
                    <Tooltip className='text-xs' content="See More">
                        <button className={`${styles.product__card_button}`}>
                            <img className='w-6 h-6' src="/icons/eye.svg" alt="eye icon" />
                        </button>
                    </Tooltip>

                    <button className='flex-1 whitespace-nowrap h-12 px-2 text-sm border-x border-black
                    hover:bg-black hover:text-white transition-all '>
                        Add To Cart
                    </button>

                    <Tooltip className='text-xs' content="Add To Wishlist">
                        <div>
                            <button className={`${styles.product__card_button} border-black border-r`}>
                                <img className='w-6 h-6' src="/icons/heart.svg" alt="eye icon" />
                            </button>
                        </div>

                    </Tooltip>

                    <Tooltip className='text-xs' content="Find Similar Products">
                        <button className={`${styles.product__card_button}`}>
                            <img className='w-6 h-6' src="/icons/search.svg" alt="eye icon" />
                        </button>
                    </Tooltip>

                </div>

            </div>
        </div>
    )
}

export default ProductCardButtons