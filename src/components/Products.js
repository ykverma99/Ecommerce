import React from "react";
import ProductBestSeller from "./ProductBestSeller";
// import ProductBest from "./ProductBest";
// import ProductsListBestSeller from "./ProductsListBestSeller";
import ProductNew from "./ProductNew";
import ProductSale from "./ProductSale";
// import ProductsListNewSeller from "./ProductListNewArrival";
export default function Products(){
  
  const [isShow, setIsShow] = React.useState("")
    function bestSeller(){
      setIsShow(<ProductBestSeller />)
    }
    function newArrival(){
      setIsShow(<ProductNew />)
    }
    function hotSale(){
      setIsShow(<ProductSale />)
    }

    return(
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-10">
                  <h1 onClick={bestSeller} className="text-2xl font-mono font-bold text-slate-500 cursor-pointer">Best Seller</h1>
                  <h1 onClick={newArrival} className="text-2xl font-mono font-bold text-slate-500 cursor-pointer">New Arrivals</h1>
                  <h1 onClick={hotSale} className="text-2xl font-mono font-bold text-slate-500 cursor-pointer">Hot Sales</h1>
                </div>
                <div className="">
                  {!isShow ? <ProductBestSeller /> : isShow}
                </div>
            </div>
    )
}