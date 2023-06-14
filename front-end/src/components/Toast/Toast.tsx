'use client'

import React from 'react'
import { Toast } from 'flowbite-react';
import { useAppSelector } from '@/toolkit/hook';

const ToastBox: React.FC = () => {
    // const dispatch = useAppDispatch();

    // const handleToast = () => {
    //   message.success(dispatch, "Thành công!")
    // }


    const showToast = useAppSelector((state) => state.toastReducer.value);
    const {message, iconType} = useAppSelector((state) => state.toastReducer.dataToast);
    
    let icon = {
        bgIcon: "",
        iconName: ""
    }

    if(iconType === "success"){
        icon.bgIcon = "bg-green-200";
        icon.iconName = "check"
    }else{
        icon.bgIcon = "bg-red-200"
        icon.iconName = "x-mark"
    }


    return (
        <>
            {showToast ? (
                <Toast className='absolute top-4 left-1/2 transform translate-y-[50%] -translate-x-1/2 z-50 w-full mx-auto shadow-xl border'>
                    <div className={`inline-flex h-8 w-8 p-2 shrink-0 items-center justify-center rounded-lg ${icon.bgIcon}`}>
                        <img src={`/icons/${icon.iconName}.svg`}></img>
                    </div>
                    <div className="ml-5 text-base font-normal">
                        {message}
                    </div>
                </Toast>
            ): (
                <Toast className='absolute -top-full left-1/2 transition-all transform translate-y-0 -translate-x-1/2 z-50 w-full mx-auto'>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center">
                    </div>
                </Toast>
            )}
        </>

    )
}

export default ToastBox