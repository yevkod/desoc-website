import React from 'react'
import { creatorsArray } from './CreatorsArray'

export const CreatorsView = () => {
    return (
        <div className='bg-black creators-shadow relative z-20 pt-[10px] px-5 pb-[90px]'>
            <div className='text-white font-bold [font-size:_clamp(2em,4vw,98px)]'>Loved by creators</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[60rem] mx-auto gap-5 pt-12'>
                {creatorsArray.map((item) => (
                    <div className='flex flex-col mx-auto hover:scale-105 transition-all border-2 bg-gradient-to-b from-[#1A2025] to-black relative text-white text-left border-gray-600 rounded-2xl p-5 max-w-[319px]'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={item.icon} alt='' />
                            </div>
                            <div className='font-bold'>
                                {item.name}
                            </div>
                        </div>
                        <div className='pt-5 font-medium'>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
