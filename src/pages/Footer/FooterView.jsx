import React from 'react'
import { footerArray } from './FooterArray'

export const FooterView = () => {
    return (
        <div className='bg-black pt-[90px] pb-[90px] p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[90rem] mx-auto gap-5 lg:grid-cols-3'>
                <div className='bg-gray-700 hover:scale-105 transition-all row-span-2 rounded-xl p-7 text-left'>
                    <div className='text-white [font-size:_clamp(2em,4vw,48px)] font-semibold leading-[55px]'>
                        Revolutionize the digital social landscape.
                    </div>
                    <div className='flex relative pt-36'>
                        <input placeholder='Enter your email' className='bg-gray-500 rounded-full text-white outline-none py-5 px-8 w-4/5' />
                        <div className='absolute right-0 hover:scale-105 transition-all'>
                            <button className='bg-white rounded-full py-5 px-9'>
                                <span>Join Newsletter</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-700 hover:scale-105 transition-all col-span-1 flex flex-col rounded-xl p-7 text-left text-white'>
                    <div className='text-white [font-size:_clamp(2em,4vw,40px)] font-semibold leading-[55px]'>
                        Support
                    </div>
                    <div className='text-gray-300 pt-3'>
                        Have any questions? Get in touch or visit our Help Center. We are available Mon - Fri, 9am - 6pm
                    </div>
                    <div className='flex text-white justify-between pt-3 items-end'>
                        <div>+48 12 345 678</div>
                        <div>support@decos.com</div>
                    </div>
                </div>
                <div className='bg-gray-700 hover:scale-105 transition-all row-span-2 rounded-xl p-7 [font-size:_clamp(2em,4vw,40px)] font-semibold leading-[55px] flex flex-col text-white'>
                    <div className='text-white'>
                        Socials
                    </div>
                    <div className='gap-5'>
                        {footerArray.map((item) => (
                            <div className='flex flex-col w-10 pt-3 first:pt-5 mx-auto'>
                                <img src={item.icon} alt='' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-gray-700 rounded-xl hover:scale-105 transition-all p-7 flex justify-between items-center text-white'>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Docs</div>
                </div>
            </div>
        </div>
    )
}
