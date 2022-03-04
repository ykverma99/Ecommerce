import React from "react";
import Malephotos from "./MalePhotos";
import PhotosCollection from "./PhotosCollection";

export default function MaleCollection(){
    const malePhoto = Malephotos.map(elm=>{
        return <PhotosCollection  img={elm.img}/>

    })
    return(
        <div className="flex justify-center items-center gap-10 w-full">
            <div className="grid grid-cols-3 grid-rows-2 w-128">
                {malePhoto}
            </div>
            <div className="flex flex-col gap-14 w-1/4">
                <div className="flex flex-col gap-7">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wider font-mono">Instagram</h1>
                    </div>
                    <div>
                        <p className=" tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime, ut ab quia nobis facilis delectus! Pariatur quos doloribus quidem placeat nam unde consectetur sequi dolores alias, quod modi iure.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl tracking-wider text-red-500 font-semibold font-serif">#Male_Fashion</h1>
                </div>
            </div>
        </div>
    )
}