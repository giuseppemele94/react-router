import { Link, NavLink } from "react-router-dom"

function NavBar() {

    

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <NavLink to="/chisiamo">About us </NavLink>
                </li>
                <li>
                    <NavLink to="/prodotti">Products</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar