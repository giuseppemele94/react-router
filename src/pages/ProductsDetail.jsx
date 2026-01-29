import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard";


const endpointBase = "https://fakestoreapi.com/products/";

function ProductsDetail() {

     // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    // var di stato per salvare info oggetto prodotto
    const [product, setProduct] = useState();
   
     // utilizzo il parametro per la chiamata corretta (sempre passando da hook su primo montaggio)
    useEffect(() => {
        axios.get(endpointBase + id)
            .then(resp => setProduct(resp.data))
            .catch(err => {
                console.log("errore sulla chiamata", err)
            })
    }, [])

    return (
       
        <>
            <h1 className="mb-4 d-flex align-items-center justify-content-center p-3">Dettaglio del Prodotto</h1>
            {product ? (
                <ProductCard product={product} />
            ) : (
                <p className="loader">Loading...</p>
            )
            }

        </>
    )
}

export default ProductsDetail