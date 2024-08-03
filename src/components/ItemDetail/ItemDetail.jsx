import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({
  name,
  id,
  img,
  category,
  description,
  stock,
  price,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity)
  };



  return (
    <article>
      <h1>{name}</h1>
      <img src={img} style={{ width: 300 }} alt={name} />
      <p>Category: {category}</p>
      <p>{description}</p>
      <p>Stock: {stock}</p>
      <h2>Price: ${price}</h2>

      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            {" "}
            <button className="btn btn-primary">Check out</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};
