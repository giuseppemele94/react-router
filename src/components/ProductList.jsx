import { useState, useEffect } from "react"
import ProductCard from "./productCard"
import axios from "axios";

function ProductList() {

    //var di stato che conterrà la lista dei prodotti 
    const [products, setProducts] = useState([]);
    const endpoint = "https://fakestoreapi.com/products";
    //montaggio del componente al cambio di Route 
    useEffect(() => {

        axios.get(endpoint)
            .then((res) => {
                setProducts(res.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, []); //viene eseguito una sola volta quando entro nella pagina 

    return (
        <div className="row g-d">
            <h1>Prodotti</h1>
            {products.map((product) => (
                <ProductCard key={product.id}
                    product={product} />
            ))}

        </div>
    )
}

export default ProductList