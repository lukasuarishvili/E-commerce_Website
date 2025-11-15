import React from 'react'

import dots from '../../assets/dots.png'

function Review({Review_info}) {
    return (
        <div className='w-full  flex flex-col gap-1 border-2 border-gray-200 rounded-[20px] p-3 '>
            <div className='flex justify-between w-full'>
                <h3>⭐⭐⭐⭐</h3>
                <img src={dots} alt="dots" className='w-6 h-6' />

            </div>
            <h3 className='font-bold text-[20px]'>{Review_info.name}✅</h3>
            <p className='w-full text-gray-600'>{Review_info.desc}</p>

            <h4 className='font-semibold text-gray-800'>{Review_info.tim}</h4>
        </div>
    )
}

export default Review