import { useState, useEffect } from "react"
import ProductCard from "./productCard"
import axios from "axios";

function ProductList({products}) {

    

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