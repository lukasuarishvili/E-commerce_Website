import React from 'react'


// images
import calvin from "../../assets/companes/Calvin_clein.png";
import versel from "../../assets/companes/versel.png";
import zara from "../../assets/companes/zara-logo-1 1.png";
import prada from "../../assets/companes/prada-logo-1 1.png";
import gucci from "../../assets/companes/gucci-logo-1 1.png";


function Banner() {
    return (
        <section className=" flex justify-center items-center gap-8.5 flex-wrap bg-black px-3 py-5">
            <img src={versel} alt="versel" className="w-[166px] h-[32px]" />
            <img src={zara} alt="zara" className="w-[91px] h-[38px]" />
            <img src={gucci} alt="gucci" className="w-[156px] h-[36px" />
            <img src={prada} alt="prada" className="w-[194px] h-[32px]" />
            <img src={calvin} alt="calvin" className="w-[206px] h-[33px]" />
        </section>
    )
}

export default Banner