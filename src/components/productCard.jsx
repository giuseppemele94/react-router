import { Link } from "react-router-dom";

function ProductCard({ product }) {

    const { title, price, description, category, image, rating, id } = product;

    return (
        <div className="lg-4">
            <div className="card h-100 shadow-sm">

                <div className="card-body d-flex flex-column">

                    {/* Titolo*/}
                    <h5 className="card-title fw-bold mb-2 text-center">
                        {title}
                    </h5>

                    {/* Immagine */}
                    <div className="d-flex align-items-center justify-content-center p-3">
                        <img
                            src={image}
                            alt={title}
                            className="img-fluid"
                            style={{
                                maxHeight: "260px",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    {/* Categoria */}
                    <span className="badge bg-secondary align-self-center mb-3">
                        {category}
                    </span>

                    {/* Descrizione */}
                    <p className="small text-center text-muted mb-3">
                        {description}
                    </p>

                    {/* Rating */}
                    <p className="small text-center  mb-3">
                        ⭐ {rating.rate} / 5 ({rating.count} recensioni)
                    </p>

                    {/* Prezzo */}
                    <p className="text-primary text-center fs-5 fw-bold">
                        € {price}
                    </p>

                    <Link to={`/prodotti/${id}`} className="btn btn-primary align-self-center">
                        Vai al dettaglio
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
