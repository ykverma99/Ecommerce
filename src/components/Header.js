import NavbarHeading from "./NavbarHeading"
import NavbarList from "./NavbarList"
import NavbarShopping from "./NavbarShopping"
export default function Header(){
    return(
        <div className="flex justify-around items-center bg-stone-50 font-mono h-20">
        <NavbarHeading />
        <NavbarList />
        <NavbarShopping />
        </div>
    )
}