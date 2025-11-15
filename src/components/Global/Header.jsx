import React from 'react'
import { Link } from 'react-router-dom';

// images
import threeLine from "../../assets/three_Lines.png";
import down_arrow from "../../assets/down_arrow.png";
import Cart from "../../assets/Cart.png";
import userLogo from "../../assets/user_logo.png";
import shusha from '../../assets/shusha.png'
import shushaGray from '../../assets/shusha gray.png'

function Header() {
    return (

        <header className=" font-roboto w-full flex items-center justify-evenly  lg:gap-10 md:gap-7 gap-10 py-7 sm:px-3 px-5">
            <button className='h-6 W-6'>
                <img
                    src={threeLine}
                    alt="three lines"
                    className="w-full h-full lg:hidden md:hidden"
                />
            </button>

            <h1 className="text-black font-bold text-[32px]">
                <Link to="/"> SHOP.CO</Link>

            </h1>

            <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium ">
                <div className="flex items-center gap-0.5 justify-center">
                    <Link to="/Categorys" className="text-black">
                        Shop
                    </Link>
                    <img src={down_arrow} alt="down arrrow" className="w-4 h-4" />
                </div>

                <Link to="/" className="text-black">
                    On Sale
                </Link>
                <Link to="/" className="text-black">
                    New Arrivals
                </Link>
                <Link to="/" className="text-black">
                    Brands
                </Link>
            </nav>

            <div className=" lg:gap-1.5 md:gap-1.5  items-center bg-[#F0F0F0] rounded-full px-4 py-2 w-1/3  hidden lg:flex md:flex ">
                <img src={shushaGray} alt="" className='w-6 h-6' />
                <input
                    type="text"
                    placeholder=" Search for products..."
                    className="bg-transparent outline-none w-full  lg:max-w-[577px] text-sm text-gray-700"
                />
            </div>

            <section className="flex items-center gap-4">
                <button className='w-6 h-6 lg:hidden md:hidden '>
                    <img src={shusha} alt="shusha " className="w-full h-full " />
                </button>
                <button className='w-6 h-6'>
                    <Link to="/cart">
                        <img src={Cart} alt="Cart" className="w-full h-full " />
                    </Link>

                </button>
                <button className='w-6 h-6'>
                    <img src={userLogo} alt="User" className="w-full h-full" />
                </button>

            </section>
        </header>
    )
}

export default Header