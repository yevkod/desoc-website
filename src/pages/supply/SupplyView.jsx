import React from 'react';
import supply from '../../assets/imgs/supply-img.png';

export const SupplyView = () => {
    return (
        <div className='bg-black pt-[90] pb-[90px] p-5'>
            <div className='max-w-[90rem] relative supply-shadow z-20 mx-auto'>
                <div className=''>
                    <div className='border-2 border-gray-400 text-white max-w-[145px] p-3 mx-auto rounded-full bg-gray-700'>
                        Token supply
                    </div>
                    <div className='text-white [font-size:_clamp(2em,4vw,50px)] leading-[55px] font-semibold pt-8'>
                        3 000 000 000 DESOC
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto justify-center pt-16'>
                        <div className='flex flex-col hover:scale-105 transition-all mx-auto gap-10'>
                            <div className='text-left flex gap-3'>
                                <div className='bg-[#7BFFFF] w-5 h-5'></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-white text-[18px] font-semibold leading-3'>
                                        Presale Allocation 50%
                                    </div>
                                    <div className='text-gray-500'>
                                        1350 million
                                    </div>
                                </div>
                            </div>
                            <div className='text-left flex gap-3'>
                                <div className='bg-[#FFFFFF] w-5 h-5'></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-white text-[18px] font-semibold leading-3'>
                                        Platform Development Funds 20%
                                    </div>
                                    <div className='text-gray-500'>
                                        600 million
                                    </div>
                                </div>
                            </div>
                            <div className='text-left flex gap-3'>
                                <div className='bg-[#2D99FE] w-5 h-5'></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-white text-[18px] font-semibold leading-3'>
                                        Marketing Initiatives 15%
                                    </div>
                                    <div className='text-gray-500'>
                                        450 million
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto hover:scale-105 transition-all'>
                            <img src={supply} alt='' />
                        </div>
                        <div className='flex flex-col hover:scale-105 transition-all mx-auto gap-10'>
                            <div className='text-left flex gap-3'>
                                <div className='bg-[#4ACFFA] w-5 h-5'></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-white text-[18px] font-semibold leading-3'>
                                        Community Rewards 10%
                                    </div>
                                    <div className='text-gray-500'>
                                        300 million
                                    </div>
                                </div>
                            </div>
                            <div className='text-left flex gap-3'>
                                <div className='bg-[#2D56E8] w-5 h-5'></div>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-white text-[18px] font-semibold leading-3'>
                                        Liquidity Reserve 10%
                                    </div>
                                    <div className='text-gray-500'>
                                        300 million
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
