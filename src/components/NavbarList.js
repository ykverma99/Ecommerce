
export default function NavbarList(){
    return(
        <ul className="flex gap-10 text-xl">
            <li className="transition ease-out duration-500 hover:decoration-solid underline-offset-4 hover:underline decoration-red-500 hover:decoration-2"><a href="hello">Home</a></li>
            <li className="transition ease-out duration-500 hover:decoration-solid underline-offset-4 hover:underline decoration-red-500 decoration-2"><a href="hello">Shop</a></li>
            <div className=" relative">
                <li className=" drop-down transition ease-out duration-500 underline-offset-4 hover:decoration-solid hover:underline decoration-red-500 decoration-2"><a href="hello">Pages</a></li>
                    <ul className="drop-list pointer-events-none absolute bg-gray-200 w-40 opacity-0 py-2 px-3 rounded-md text-lg">
                        <li><a href="jsdj">About us</a></li>
                        <li><a href="jsdj">Shop Details</a></li>
                        <li><a href="jsdj">Shopping Cart</a></li>
                        <li><a href="jsdj">Check Out</a></li>
                        <li><a href="jsdj">Blog Details</a></li>
                    </ul>
            </div>
            <li className="transition ease-out duration-500 hover:decoration-solid underline-offset-4 hover:underline decoration-red-500 decoration-2"><a href="hello">Blog</a></li>
            <li className="transition ease-out duration-500 hover:decoration-solid underline-offset-4 hover:underline decoration-red-500 decoration-2"><a href="hello">Contact</a></li>
        </ul>
    )
}