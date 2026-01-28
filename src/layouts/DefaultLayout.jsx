import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function DefaultLayout() {


    return (
       
        <header>
            <NavBar/>
            <Outlet/>
        </header>
       
    )
}

export default DefaultLayout