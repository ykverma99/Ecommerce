import React from "react";
import NavbarHeading from "./NavbarHeading";
import Cards from "../images/cards.png"
export default function FooterInfo(){
    return(
        <div className="flex flex-col gap-7">
            <NavbarHeading />
            <div>
                <p className=" max-w-xs text-lg tracking-wide text-gray-400">The Customer is heart of our unique business model, which includes design</p>
            </div>
            <div>
                <a href="../App.js"><img src={Cards} alt="Cards" /></a>
            </div>
        </div>
    )
}