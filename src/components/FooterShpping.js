import React from "react";

export default function FooterShopping(props){
    return(
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-xl tracking-wide uppercase">{props.heading}</h1>
            </div>
            <ul className="flex justify-center flex-col gap-3">
                <li className="text-gray-400 tracking-wide">{props.cc}</li>
                <li className="text-gray-400 tracking-wide">{props.tp}</li>
                <li className="text-gray-400 tracking-wide">{props.ad}</li>
                <li className="text-gray-400 tracking-wide">{props.sr}</li>
            </ul>
        </div>
    )
}