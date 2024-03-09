import React from 'react'
import { Link } from 'react-scroll'
import { Button } from '../Button/Button';

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }

    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md rounded-lg'>
            <ul className='flex flex-col gap-5'>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="anonymousView" smooth={true} duration={500} onClick={handleMenu}>Features
                    </Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="howItWorkView" smooth={true} duration={500} onClick={handleMenu}>How it Works</Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="utilityView" smooth={true} duration={500} onClick={handleMenu}>Resources
                    </Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="comparisonView" smooth={true} duration={500} onClick={handleMenu}>Docs</Link>
                </li>
            </ul>
            <div className='flex flex-col pt-8 gap-5'>
                <div>
                    <Button text='Buy Desoc' className='w-full mt-5 text-center flex justify-center' />
                </div>
            </div>
        </div>
    )
}
