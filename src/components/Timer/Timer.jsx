import React from 'react';
import { useTimer } from 'react-timer-hook';

export const MyTimer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px' }}>
                <span>{days}<span className='text-gray-200'>d</span>{' '}</span><span>{hours}<span className='text-gray-200'>h</span>{' '}</span><span>{minutes}<span className='text-gray-200'>m</span>{' '}</span><span>{seconds}<span className='text-gray-200'>s</span>{' '}</span>
            </div>
        </div>
    );
}