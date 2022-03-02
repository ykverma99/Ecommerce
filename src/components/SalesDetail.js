import React from "react";
import SalesCountdown from "./SalesCountdown";
export default function SalesDetail(){
    return(
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-xl text-red-400">DEAL OF THE WEEK</h2>
            </div>
            <div>
                <h1 className="text-4xl font-bold max-w-sm">Multi-Pocket Chest Bag</h1>
            </div>
            <div>
                <SalesCountdown />
            </div>
            <div>
                <button className="text-lg text-gray-100 bg-slate-800 h-14 w-40 rounded shadow-lg shadow-slate-400 transition ease-in-out duration-700 delay-100 hover:text-slate-800 hover:bg-white">SHOP NOW</button>
            </div>
        </div>
    )
}