function ProductCard({ product }) {

  const { title, price, description, category, image } = product;

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

          {/* Prezzo */}
          <div className="d-flex justify-content-end mt-auto">
            <span className="text-primary fs-5 fw-bold">
              € {price}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
