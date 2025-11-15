import React from 'react'

// images
import Gym from '../../assets/Gym.png'
import Party from '../../assets/party.png'
import Formal from '../../assets/Formal.png'
import Casual from '../../assets/Casual.png'


function DressStyle() {
    return (
        <section className='w-full py-4 px-6 md:p-10  lg:py-20 lg:px-24  flex flex-col gap-5 justify-center items-center font-roboto'>
            <h1 className=' text-4xl text-center md:lg:text-[48px] font-extrabold text-black'>BROWSE BY DRESS STYLE</h1>
            
            <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-3 gap-5
             w-full bg-[#F0F0F0] p-13 rounded-2xl">

                <div className="rounded-xl md:row-span-1 md:col-span-1">
                    <img src={Casual} alt="Casual" className="w-full h-full  rounded-xl" />
                </div>

                <div className="rounded-xl md:row-span-1 md:col-span-2">
                    <img src={Formal} alt="Formal" className="w-full h-full  rounded-xl" />
                </div>

                <div className="rounded-xl md:row-span-1 md:col-span-2">
                    <img src={Party} alt="Party" className="w-full h-full  rounded-xl" />
                </div>

                <div className="rounded-xl md:row-span-1 md:col-span-1">
                    <img src={Gym} alt="Gym" className="w-full h-full  rounded-xl" />
                </div>

            </div>

        </section>
    )
}

export default DressStyle