import React from "react";
import Bag from "../images/bagIMG.webp"

export default function SalesImage(){
    return(
        <div className="relative">
            <div>
                <img src={Bag} alt="" />
            </div>
            <div className=" absolute top-0 right-0 h-24 w-24 rounded-full flex flex-col justify-center items-center bg-black text-white">
                <p className="text-sm">Sale Of</p>
                <h2 className="text-lg font-semibold">$29.99</h2>
            </div>
        </div>
    )
}