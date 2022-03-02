import React from "react";
import SalesDetail from "./SalesDetail";
import SalesImage from "./SalesImage";
import SalesTypes from "./SalesTypes";

export default function SalesComponents(){
    return(
        <div className=" relative flex justify-center items-center gap-32 bg-red-50 h-128">
            <div className="absolute left-0 h-72 w-96 bg-white"></div>
            <SalesTypes />
            <SalesImage />
            <SalesDetail />
        </div>
            
    )
}