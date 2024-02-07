import { CartWidget } from "../common/CartWidget"


export const Navbar = ()=>{

    return <div>
        <h3>logo</h3> 
        <ul>
            <li>inicio</li>
            <li>inmuebles</li>
            <CartWidget/>

        </ul>
    </div>

}