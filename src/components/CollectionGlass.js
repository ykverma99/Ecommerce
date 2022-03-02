import React from "react";
import Glass from "../images/glasses.jpeg"

export default function CollectionGlass(props){

    return(
        <div className="flex justify-center">
            <div className="flex flex-col"> 
                <div>
                    <img src={Glass} alt="Shirt" />
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                    <h2 className="text-5xl">Accessiores</h2>
                    <button className="mx-3 text-lg"><a href="/HELLO" className="linehover">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    )
}