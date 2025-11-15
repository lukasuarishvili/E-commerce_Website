import React from 'react'



// images
import insta from '../../assets/insta.png'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.png'
import tviter from '../../assets/tviter.png'

import visa from '../../assets/visa.png'
import red from '../../assets/rde.png'
import applepay from '../../assets/applepay.png'
import googlepay from '../../assets/googlepay.png'


function Footer() {
    return (
        <footer className='w-full bg-[#F0F0F0] mx-auto p-6 flex flex-col gap-8 pt-30'>
            <div className='w-full justify-center flex flex-col gap-5  md:flex-row lg:flex-row '>

                <div className='w-full lg:w-fit sm:w-fit flex flex-col gap-5'>
                    <h3 className='text-[33px] font-extrabold'>SHOP.CO</h3>
                    <p className='w-full leading-5 text-[14px] text-gray-500'>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
                    <div className='flex gap-2.5'>
                        <img src={insta} alt="insta" className='w-7 h-7' />
                        <img src={github} alt="github" className='w-7 h-7' />
                        <img src={facebook} alt="facebook" className='w-7 h-7' />
                        <img src={tviter} alt="tiviter" className='w-7 h-7' />
                    </div>
                </div>

                <div className='flex w-full justify-evenly flex-wrap gap-3 items-start'>
                    <div className='flex flex-col gap-[26px] px-1 max-w-fit '>
                        <h5 className='font-medium '>Company</h5>
                        <div className='flex flex-col gap-[15px] text-gray-500 '>
                            <p>About</p>
                            <p>Features</p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>

                    </div>


                    <div className='flex flex-col gap-[26px] px-1 max-w-fit'>
                        <h5 className='font-medium '>Help</h5>
                        <div className='flex flex-col gap-[15px] text-gray-500'>
                            <p>Customer Support</p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[26px] px-1 max-w-fit'>
                        <h5 className='font-medium '>FAQ</h5>
                        <div className='flex flex-col gap-[15px] text-gray-500'>
                            <p>Account</p>
                            <p>Manage Deliveries</p>
                            <p>Orders</p>
                            <p>Payments</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[26px] px-1 max-w-fit'>
                        <h5 className='font-medium '>Resources</h5>
                        <div className='flex flex-col gap-[15px] text-gray-500'>
                            <p>Free eBooks</p>
                            <p>Development Tutorial</p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className='w-full flex flex-row justify-between border-gray-300 border-t-[1.5px] pt-4'>
                <div>
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                </div>

                <div className='flex flex-row flex-wrap gap-2'>
                    <img src={visa} alt="visa" className='w-[46px] h-[31px]' />
                    <img src={red} alt="" className='w-[46px] h-[31px]' />
                    <img src={applepay} alt="" className='w-[46px] h-[31px]' />
                    <img src={googlepay} alt="" className='w-[46px] h-[31px]' />
                </div>
            </div>

        </footer>
    )
}

export default Footer