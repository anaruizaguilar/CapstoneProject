import { Link } from "react-router-dom";
import CategoriesDropdown from "./CategoriesDropdown";

function Navbar({ token}) {


    return(
    <>
        <div className="navbar">
        <div className="categories-dropdown"><CategoriesDropdown /></div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li>{!token && <Link to={"/register"}>Register</Link>}</li>
                <li>{!token && <Link to={"/login"}>Login</Link>}</li>
                <li>{token && <Link to={"/account/:id"}>Account</Link>}</li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>
        </div>
    </>
    )
}

export default Navbar;