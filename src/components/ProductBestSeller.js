import React from "react";
import ProductBest from "./ProductBest";
import ProductListBestSeller from "./ProductsListBestSeller";

export default function ProductBestSeller(){
    // const [bestSell,setBestSell] = React.useState("")
    const products = ProductListBestSeller.map(items=>{
        return(
            <ProductBest 
            img={items.img}
            title={items.title}
            cart={items.cart}
            price={items.price}
            key={items.id}
            />
            )
    }) 
    return (
            <div className="h-screen my-10 mx-auto w-3/4 grid grid-cols-4 gap-12 grid-rows-2">
                    {products}
            </div>
    )
}