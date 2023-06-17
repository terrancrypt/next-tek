import Image from 'next/image';
import React from 'react'
import Button from '../Button/Button';

interface BannerImage {
    urlImage: string;
    title?: string;
    desc?: string;
    btnText?: string;
    btnUrl?: string;
}

const BannerImage: React.FC<BannerImage> = ({ urlImage, title, desc, btnText, btnUrl }) => {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full relative'>
                <Image className='object-cover brightness-90' src={urlImage} alt={title || "image"} fill />

                <div className='absolute top-1/2 left-[50px] bg-white opacity-90'>
                    {title ? (<h2 className='p-4 text-2xl font-semibold'>{title}</h2>) : <></>}

                    {desc ? (<h2 className='p-4'>{desc}</h2>) : <></>}

                    <div className='p-[16px_0px_12px_16px]'>
                        {btnText ? (<Button btnClass='bg-black text-white' btnText={btnText} />) : <></>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BannerImage