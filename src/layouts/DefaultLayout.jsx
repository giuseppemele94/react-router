import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function DefaultLayout() {


    return (
       
        <header>
            <NavBar/>
            {/** in outlet react inserisce Homepage/aboutus/products , quindi il layout non cambia mai cambia solo il contenuto di outlet */}
            <Outlet/> 
        </header>
       
    )
}

export default DefaultLayout