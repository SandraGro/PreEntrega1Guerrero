import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams, Link } from "react-router-dom";

function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    } else {
      getProductsByCategory(categoryId)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <div>
      <h2>{greetings}</h2>
      <div className="d-flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{
                width: "18rem",
                margin: "15px",
              }}
            >
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
