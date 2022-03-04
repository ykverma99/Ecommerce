import React from "react";
import Mail from "../images/mail.svg"
export default function FooterEmail(){

    return(
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-xl uppercase tracking-wide">Newletter</h1>
            </div>
            <div className=" max-w-xs">
                <p className="text-gray-400">Be the first to know about new arrivals, look, books, sales & promos!</p>
            </div>
            <div className="flex border-b border-white w-fit py-1">
                <input className=" bg-transparent outline-none" type="email" placeholder="Your email"/>
                <button className=""><img src={Mail} alt="" /></button>
            </div>
        </div>
    )
}