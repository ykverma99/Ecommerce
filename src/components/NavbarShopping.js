import Search from "./Search"
import Heart from "../images/heart.svg"
import Bucket from "../images/shopping-bag.svg"
export default function NavbarShopping(){
    return(
        <div className="flex items-center gap-4">
            <Search />
            <div>
                <img src={Heart} alt="heart" />
            </div>
            <div className="flex gap-2 item-end justify-end">
                <div>
                    <img src={Bucket} alt="Basket" />
                </div>
                <div className="">
                    <p>$0.00</p>
                </div>
            </div>
        </div>
    )
}