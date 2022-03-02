
import React from "react";

export default function MainAbout(){
    return(
        <div className="flex flex-col gap-5 max-w-xl">
            <div>
                <h2 className=" text-xl font-semibold text-red-500">SUMMER COLLECTION</h2>
            </div>
            <div>
                <h1 className=" text-6xl font-medium ">Fall - Winter Collection 2025</h1>
            </div>
            <div>
                <p className="text-xl px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos, quia, provident quaerat deserunt hic consequuntur impedit nesciunt recusandae voluptas quidem ut fuga reiciendis minima facere iure?</p>
            </div>
            <div className="px-4 my-6">
                <button className="bg-slate-800 text-white text-lg w-40 h-14 transition ease-in-out delay-100 duration-500 hover:text-gray-700 hover:bg-white">SHOP NOW</button>
            </div>
        </div>
    )
}