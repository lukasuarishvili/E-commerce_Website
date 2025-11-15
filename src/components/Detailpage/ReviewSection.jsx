import React from 'react'
import Review from '../Global/Review';

// images
import toogle from '../../assets/toggle.png'
import down_arrow from "../../assets/down_arrow.png";

function ReviewSection({ reviews }) {

    if ( reviews.length === 0) {
        <>
            <h1>no reviews</h1>
        </>
    }

    return (
        <section className='w-full mx-auto flex flex-col gap-5 py-3 lg:px-20  px-2 '>

            {/* the thre choises */}
            <div className='flex w-full gap-8 justify-center items-center text-center flex-wrap border-b-[2px]  border-gray-400'>
                <button className='text-gray-900 text-[20px]'>Product Details</button>
                <button className='  text-[20px]'>Rating & Reviews</button>
                <button className='text-gray-900 text-[20px]'>FAQs</button>
            </div>

            {/*toogle section  */}
            <div className='w-full flex justify-between '>
                <div className='flex gap-2 items-end'>
                    <h4 className='font-bold text-[24px]'>ALL</h4>
                    <p className='text-gray-600'>(451)</p>
                </div>

                <div className='flex flex-row gap-3'>
                    <button className='rounded-[50%] bg-gray-200  p-2 '>
                        <img src={toogle} alt="toglle" className='w-6 h-6' />
                    </button>

                    <button className=' rounded-[62px] bg-gray-200 px-4 py-1.5 flex gap-2 items-center'>
                        Latest
                        <img src={down_arrow} alt="down arrow" className="w-4 h-4" />
                    </button>

                    <button className='bg-black text-white rounded-[62px] px-3 py-1.5'>
                        Write a Review
                    </button>
                </div>
            </div>


            {/* revius card section grid */}
            <div className='flex flex-wrap lg:grid    lg:grid-cols-2 gap-3.5'>

                {
                    reviews.map((Review_info, index) => (
                        <Review key={index} Review_info={Review_info} />
                    ))
                }



            </div>



            <button className='self-center px-4 py-3.5 border-gray-300 border-[2px] text-black font-semibold rounded-[62px]'>
                Load More Reviews
            </button>
        </section>
    )
}

export default ReviewSection