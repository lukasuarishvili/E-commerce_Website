import React from 'react'


// images
import arrowleft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
function HappyCustomers() {
    return (
        <section className='w-full flex flex-col gap-7 px-6 lg:px-24 mx-auto'>
            <div className='w-full flex gap-2 md:justify-between lg:justify-between items-end md:items-center lg:items-center'>
                <h3 className=' font-extrabold text-[32px] lg:text-5xl flex flex-wrap text-start'>OUR HAPPY CUSTOMERS</h3>
                <div className='flex gap-1 min-w-fit'>
                    <button className='cursor-pointer '>
                        <img src={arrowleft} alt="arrow left" className='w-6 h-6' />
                    </button>
                    <button className='cursor-pointer'>
                        <img src={arrowRight} alt="arrowRight" className='w-6 h-6' />
                    </button>

                </div>
            </div>
            <div>

            </div>

        </section>
    )
}

export default HappyCustomers