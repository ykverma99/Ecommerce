import CollectionShirt from "./CollectionShirt";
import CollectionGlass from "./CollectionGlass";
import CollectionShoe from "./CollectionShoe";

export default function Collection(){
    return(
        <div className="relative h-screen">
            <div className="absolute leftShirt">
                <CollectionShirt/>
            </div>
            <div className="absolute leftGlass">
                <CollectionGlass/>
            </div>
            <div className="absolute leftShoe">
                <CollectionShoe/>
            </div>
        </div>
    )
}