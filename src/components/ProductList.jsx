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
        <div className="container-md py-5">
            <h1 className="mb-4 d-flex align-items-center justify-content-center p-3">Prodotti</h1>

            <div className="row g-4 justify-content-center">
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductList