import React from 'react'


// images
import right_arrow from '../../assets/right_arrow.png'

function CategoryHeader() {
    return (
        <section className='w-full  px-20 '>
            <div className='flex items-center gap-1.5 border-t-1 border-gray-400 py-5'>
                <h2 className='text-gray-600'>Home</h2>
                <div>
                    <img src={right_arrow} alt="right_arrow" className='w-4 h-4' />
                </div>
                <h2 className='text-black'>Casual</h2>
            </div>

        </section>
    )
}

export default CategoryHeader