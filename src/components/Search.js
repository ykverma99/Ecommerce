import React from "react"
import SearchImg from "../images/search.svg"
export default function Search(){

    const [search,setSearch] = React.useState(true)
    const searchBar = <input className="py-1 px-2 border border-slate-400 rounded" type="text" placeholder="Search"/>
    function searchOn(){
        setSearch(prevSearch=> !prevSearch)
    }

    return(
        <div className="flex gap-1">
                <img src={SearchImg} alt="Search" onClick={searchOn}/>
            <div>
                {search ? false:searchBar}
            </div>
        </div>
    )
}