import React from "react";
import Star from "../components/Star"
import Search from "../images/search.svg"
import Reapeat from "../images/repeat.svg"
import Heart from "../images/heart.svg"

export default function ProductCollection(props){
    const starCont = Star.map(elem =>{
        return(
            <img className="cursor-pointer" src={elem.starImg} alt="" />
        )
    })

    const [isCart,setIsCart] = React.useState(true)
    const [color,setColor] = React.useState("")
    const [img,setImg] = React.useState("")

    function hoverInCart(){
        setIsCart(prevCart=>!prevCart)
        setColor("cart")
        setImg("img-hover")
    }
    console.log(img)
    function hoverOutCart(){
        setIsCart(prevCart=>!prevCart)
        setColor("text-black")
    }
    return(
            <div onMouseEnter={hoverInCart} onMouseLeave={hoverOutCart} className="relative flex flex-col justify-center rounded-lg pb-2">
                <div className="h-4/5 w-full">
                    <img className="h-full w-full block rounded-t-lg" src={props.img} alt="" />
                </div>
                {!isCart && <div className="absolute right-4 top-12 transition-all ease-in-out delay-300 duration-500 flex flex-col gap-3">
                    <a href="heloo"><img className={img} src={Heart} alt="" /></a>
                    <a href="heloo"><img className={img} src={Reapeat} alt="" /></a>
                    <a href="heloo"><img className={img} src={Search} alt="" /></a>
                </div>}
                <div className="flex bg-stone-200 rounded-b-lg flex-col gap-1 pb-3 px-3">
                    <div>
                        <a href="cartPage" className={color}><h3 className="text-lg">{isCart ? props.title : props.cart}</h3></a>
                    </div>
                    <div className="flex">
                        {starCont}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{`$${props.price}`}</h2>
                    </div>
                </div>
            </div>
    )
}