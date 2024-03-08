import React from 'react'
import { Button } from '../../components/Button/Button'
import revenue from '../../assets/imgs/revenue.png';
import photo_1 from '../../assets/imgs/revenue1.png';
import photo_2 from '../../assets/imgs/revenue2.png';
import photo_3 from '../../assets/imgs/revenue3.png';
import photo_4 from '../../assets/imgs/revenue4.png';
import photo_5 from '../../assets/imgs/revenue5.png';
import photo_6 from '../../assets/imgs/revenue6.png';

export const RevenueView = () => {
    return (
        <div className='bg-black relative pt-[90px] pb-[90px]'>
            <div className='flex flex-col mx-auto max-w-[90rem]'>
                <div>
                    <div className='text-white [font-size:_clamp(2em,4vw,50px)] leading-[55px] font-bold'>
                        Generate revenue by crafting <br></br> exclusive content
                    </div>
                    <div className='flex justify-center pt-8'>
                        <Button text='Buy Decos' />
                    </div>
                </div>
                <div className='flex relative mx-auto pt-20'>
                    <img className='z-50' src={revenue} alt='' />
                    <img className='absolute z-10 right-[120%] top-[15%]' src={photo_1} alt='' />
                    <img className='absolute right-[140%] top-[30%]' src={photo_2} alt='' />
                    <img className='absolute right-[100%] top-[60%]' src={photo_3} alt='' />
                    <img className='absolute left-[120%] top-[14%]' src={photo_4} alt='' />
                    <img className='absolute left-[140%] top-[34%]' src={photo_5} alt='' />
                    <img className='absolute left-[110%] top-[64%]' src={photo_6} alt='' />
                </div>
            </div>
        </div>
    )
}
