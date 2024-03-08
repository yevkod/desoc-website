import React from 'react';
import phone_1 from '../../assets/imgs/phone1.png';

export const PhonesView = () => {
  return (
    <div className='flex relative bg-black pt-[90px] pb-[90px] p-5'>
      <div className='relative max-w-[90vw] mx-auto'>
        <div className='max-w-[100%] hover:scale-105 transition-all'>
          <img className='max-w-[100%]' src={phone_1} alt='' />
        </div>
      </div>
    </div>
  )
}
