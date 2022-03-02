import React from "react";
import Shoe from "../images/shoe.jpeg"

export default function CollectionShirt(props){

    return(
        <div className="flex justify-center">
            <div className="relative flex justify-center items-center flex-row-reverse"> 
                <div>
                    <img src={Shoe} alt="Shirt" />
                </div>
                <div className="absolute flex flex-col gap-3 justify-start items-start -left-1/2">
                    <h2 className="text-5xl">Shoe Spring<br />2025</h2>
                    <button className="mx-3 text-lg"><a href="/HELLO" className="linehover">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    )
}