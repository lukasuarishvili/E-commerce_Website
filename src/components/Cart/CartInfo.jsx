import React from 'react'
import CartItem from './CartItem'
// images
import tshirt from '../../assets/tshirt.png'

import pantt from '../../assets/CLOTH1.png'
import pantts from '../../assets/CLOTH2.png'
import trash from '../../assets/trash.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import promo from '../../assets/promo.png'

function CartInfo({ data }) {

    if ( data.length === 0) {
        return <p className="text-center text-4xl font-bold font-roboto py-4"> cart is empty </p>;
    }


    console.log(data)
    return (
        <section className='w-full mx-auto px-2 md:px-10 lg:px-20 py-5 pb-12  flex flex-col  gap-3 '>
            <h5 className=' pt-4 border-t-2 border-gray-400'>{"Home > Cart"}</h5>

            <h4 className='text-[40px] font-extrabold '>Your cart</h4>
            <div className='w-full flex lg:flex-row  flex-wrap  gap-5' >
                <div className='flex flex-col gap-2 rounded-[20px] border-gray-300 border-2 w-fit max-w-[715px]'>

                    {
                        data.map((item , index) =>
                            <CartItem item={item} index={index}></CartItem>
                        )
                    }


                </div>

                <div className='flex flex-col gap-3  w-full h-fit border-2 border-gray-300 rounded-[20px] p-5   max-w-[505px]'>
                    <h5>Order Summary</h5>
                    <div className='w-full flex justify-between  gap-18 items-center'>
                        <p className='text-[20px]'>Subtotal</p>
                        <h6 className="text-[20px] font-bold"> $565</h6>
                    </div>

                    <div className='w-full flex justify-between items-center'>
                        <p className="text-[20px]">Discount (-20%)</p>
                        <h6 className="text-[20px] font-bold">$565</h6>
                    </div>

                    <div className='w-full flex justify-between items-center'>
                        <p className="text-[20px]" >Delivery Fee</p>
                        <h6 className='text-red-500 text-[20px] font-bold'>$-$113</h6>
                    </div>

                    <div className='w-full flex justify-between items-center border-t-[1px]  border-gray-300 py-2'>
                        <p className="text-[20px]">Total</p>
                        <h6 className="text-[20px] font-bold">$565</h6>
                    </div>


                    <div className='w-full flex  gap-2 '>
                        <div className='max-w-full flex items-center  gap-2 py-2  px-6 bg-gray-300 rounded-[62px]'>
                            <img src={promo} alt="promo" className='w-6 h-6' />
                            <input type="text" placeholder='Add promo code ' className='py-1 px-2 border-none active:border-none' />
                        </div>

                        <button className='bg-black py-1 px-10 text-white rounded-[62px]'>
                            Apply
                        </button>
                    </div>
                    <button className='bg-black text-white py-3 w-full rounded-[62px]'>
                        Go to Checkout
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CartInfo