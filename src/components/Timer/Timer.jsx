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
                <span>{days}d{' '}</span><span>{hours}h{' '}</span><span>{minutes}m{' '}</span><span>{seconds}s{' '}</span>
            </div>
        </div>
    );
}