import React from "react";
import ProductBest from "./ProductBest";
import ProductsListSale from "./ProductListSale";

export default function ProductSale(){
    const products = ProductsListSale.map(items=>{
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
            <div className="my-10 mx-auto w-3/4 grid grid-cols-4 gap-12 grid-rows-1">
                    {products}
                </div>
    )
}