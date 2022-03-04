import React from "react";

export default function PhotosCollection(props){

    return(
        <div>
            <div>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}