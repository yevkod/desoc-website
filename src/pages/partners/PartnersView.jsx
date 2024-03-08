import React from 'react'
import { partnersArray } from './PartnersArray'
import Marquee from "react-fast-marquee";


export const PartnersView = () => {
    return (
        <div className='bg-black pt-[9px] pb-[90px] p-5'>
            <div className='flex max-w-[70rem] mx-auto gap-10 justify-center'>
                <Marquee autoFill play>
                    <div className='flex gap-10 first:pr-6'>
                        {partnersArray.map((item) => (
                            <div className='flex items-center justify-center gap-10'>
                                <img src={item.icon} alt='' />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}
