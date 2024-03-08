import React from 'react'
import { Button } from '../../components/Button/Button'

export const FutureArray = () => {
    return (
        <div className='bg-black pt-[90px] pb-[90px]'>
            <div className='e text-white font-bold [font-size:_clamp(2em,4vw,98px)] leading-[95px]'>
                Made for the future.<br></br>
                Available today.
            </div>
            <div className='flex justify-center pt-10'>
                <Button text='Buy Desoc' />
            </div>
        </div>
    )
}
