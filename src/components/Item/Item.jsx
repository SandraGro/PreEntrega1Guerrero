import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "15px" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};
