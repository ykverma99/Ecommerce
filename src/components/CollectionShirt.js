import React from "react";
import Shirt from "../images/swagShirt.jpeg"

export default function CollectionShirt(props){

    return(
        <div className="flex justify-center">
            <div className="relative flex justify-center items-center flex-row-reverse"> 
                <div>
                    <img src={Shirt} alt="Shirt" />
                </div>
                <div className="absolute flex flex-col gap-3 justify-start items-start -left-3/4">
                    <h2 className="text-5xl">Clothing <br /> COllection 2025</h2>
                    <button className="mx-3 text-lg"><a href="/HELLO" className="linehover">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    )
}