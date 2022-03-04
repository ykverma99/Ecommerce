import React from "react";
import Devloper from "./Devloper";
import FooterEmail from "./FooterEmail";
import FooterInfo from "./FooterInfo";
import FooterShopping from "./FooterShpping";

export default function Footer(){
    return(
        <div className="bg-black text-white flex flex-col justify-center items-center gap-16 h-96 p-5">
            <div className="flex w-full justify-center items-center gap-20">
            <FooterInfo />
            <FooterShopping 
                heading={"Shopping"}
                cc={"Clothing Store"}
                tp={"Trending Shoes"}
                ad={"Accesspries"}
                sr={"Sale"}
            />
            <FooterShopping 
                heading={"Shopping"}
                cc={"Clothing Store"}
                tp={"Trending Shoes"}
                ad={"Accesspries"}
                sr={"Sale"}
            />
            <FooterEmail />
            </div>
            <div className="w-full flex flex-col justify-center items-end gap-2">
                <Devloper />
            </div>
        </div>
    )
}