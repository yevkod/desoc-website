import React from 'react'
import { Button } from '../../components/Button/Button'

export const NavbarView = () => {
    return (
        <div className='bg-black p-5'>
            <div className='flex justify-between h-[60px] items-center p-5'>
                <div className='text-[40px] text-white font-bold cursor-pointer hover:scale-105 transition-all'>
                    <span>Desoc.</span>
                </div>
                <ul className='flex gap-10 cursor-pointer backdrop-blur-xl border-2 border-gray-500 rounded-full px-6 py-3 text-white'>
                    <li className='hover:underline hover:scale-105 transition-all'>Features</li>
                    <li className='hover:underline hover:scale-105 transition-all'>How it works</li>
                    <li className='hover:underline hover:scale-105 transition-all'>Resources</li>
                    <li className='hover:underline hover:scale-105 transition-all'>Docs</li>
                </ul>
                <div>
                    <Button text='Buy Desoc' />
                </div>
            </div>
        </div>
    )
}
