function ProductCard({ product }) {

    //destrutturo oggetto propr 

    const { title, price, description, category, image } = product;

    return (
        <div className="col-lg-4">
            <div className="card actor-card h-100 shadow-lg ">
                <div className="card-body text-center d-flex flex-column">
                    <h3 className="card-title  fw-bold mb-3">{title}</h3>

                    <div className="actor-img-wrap mx-auto mb-3">
                        <img className="actor-img" src={image} alt={title} />
                    </div>

                    <p className="small mb-3">{description}</p>

                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <span className="fst-italic">{category}</span>
                        <span className=" fst-italic">{price}</span>
                        {/* <span className=" fst-italic">{rating}</span> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard