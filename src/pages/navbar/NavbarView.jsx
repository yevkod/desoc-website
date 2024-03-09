import React from 'react'
import { Button } from '../../components/Button/Button'
import burger from '../../assets/imgs/burgerIcon.svg';
import { Link } from 'react-scroll';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='bg-black rounded-b-lg p-5 fixed z-[1000] w-full'>
            <div className='flex justify-between h-[60px] items-center p-5'>
                <div className='text-[40px] text-white font-bold cursor-pointer hover:scale-105 transition-all'>
                    <Link to="mainView" smooth={true} duration={500}>
                        <span>Desoc.</span>
                    </Link>
                </div>
                <ul className='hidden lg:flex gap-10 cursor-pointer backdrop-blur-xl border-2 border-gray-500 rounded-full px-6 py-3 text-white'>
                    <li className='hover:underline hover:scale-105 transition-all'><Link to="featuresView" smooth={true} duration={500}>Features</Link></li>
                    <li className='hover:underline hover:scale-105 transition-all'><Link to="revenueView" smooth={true} duration={500}>How it works</Link></li>
                    <li className='hover:underline hover:scale-105 transition-all'><Link to="stageView" smooth={true} duration={500}>Docs</Link></li>
                    <li className='hover:underline hover:scale-105 transition-all'><Link to="future" smooth={true} duration={500}>Resources</Link></li>
                </ul>
                <div className='flex lg:hidden justify-end w-10 cursor-pointer' onClick={handleMenu}>
                    <img src={burger} alt='burger' />
                </div>
                <div className='hidden lg:flex'>
                    <Button text='Buy Desoc' />
                </div>
            </div>
        </div>
    )
}
