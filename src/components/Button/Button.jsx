import React from 'react'

export const Button = ({ text, className = '', ...rest }) => {
    return (
        <div>
            <button className={`bg-white rounded-full flex items-center hover:bg-gray-200 active:bg-gray-300 hover:scale-105 transition-all gap-3 px-7 py-4 ${className}`} {...rest}>
                <div className='rounded-full w-4 h-4 bg-[#1F85DE]'></div>
                <span className='font-semibold'>{text}</span>
            </button>
        </div>
    )
}
