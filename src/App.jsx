import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/** in default layout ci sono tutte le pagine che devono condividere lo stesso layout  */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<AboutUs />} />
          <Route path="/prodotti" element={<Products />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
