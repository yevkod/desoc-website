import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MyTimer } from '../../components/Timer/Timer';
import { Buy } from '../../components/Buy/Buy';

export const MainView = () => {
    const percentage = 66;

    const time = new Date();
    time.setDate(time.getDate() + 9);
    time.setHours(time.getHours() + 12);
    time.setSeconds(time.getSeconds() + 3);

    return (
        <div className='bg-black relative z-20 flex pt-[90px] main-shadow items-center justify-center pb-[90px]'>
            <div className='flex flex-col items-center'>
                <div className='flex w-36 justify-center'>
                    <CircularProgressbar value={percentage} className='flex font-bold flex-wrap' text='$2,521,597.21' styles={buildStyles({
                        textSize: '10px',
                        textColor: 'white'
                    })} />
                </div>
                <div className='text-white items-center pt-5'>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <div className='text-[40px] text-white font-bold hover:scale-105 transition-all'>
                    <span>Revolutionize the digital<br></br> social landscape</span>
                </div>
                <div className='flex'>
                    <Buy />
                </div>
            </div>
        </div>
    )
}
