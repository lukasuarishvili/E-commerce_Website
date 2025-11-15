import React from 'react'

// images
import HomePageBg from "../../assets/HomePageBg.jpg";



function Hero() {
    return (
        <div className="bg-[#F2F0F1] flex justify-center lg:justify-start items-center text-center md:text-start w-full h-fit p-16 font-roboto bg-img bg-[url(/img/mountains.jpg)]"
            style={
                {
                    backgroundImage: `url(${HomePageBg})`,
                    backgroundSize: '600px',
                    backgroundPosition: `bottom 80% right 15%  `,
                    backgroundRepeat: 'no-repeat'
                }
            }
        >
            <section className="flex flex-col gap-8 lg:w-1/2 w-full"

            >
                <h3 className="text-[50px] md:text-[64px] font-bold leading-[64px]">
                    FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
                </h3>

                <p className="text-[#00000099]">
                    Browse through our diverse range of meticulously crafted garments, designed
                    to bring out your individuality and cater to your sense of style.
                </p>

                <div>
                    <button className="bg-black rounded-[62px] text-white py-4 px-10 w-full md:max-w-[210px] mt-4 hover:bg-gray-800 transition-colors">
                        Shop Now
                    </button>
                </div>

                <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-14 mt-4 text-center lg:text-start">
                    <li className=" lg:border-r-2 border-gray-400 pr-5">
                        <h5 className="text-[40px] font-bold">200+</h5>
                        <p className="text-gray-500">International Brands</p>
                    </li>
                    <li className=" lg:border-r-2 border-none lg:border-solid  lg:border-gray-400 pr-5">
                        <h5 className="text-[40px] font-bold">2,000+</h5>
                        <p className="text-gray-500">High-Quality Products</p>
                    </li>
                    <li>
                        <h5 className="text-[40px] font-bold">30,000+</h5>
                        <p className="text-gray-500">Happy Customers</p>
                    </li>
                </ul>

            </section>
        </div>
    )
}

export default Hero