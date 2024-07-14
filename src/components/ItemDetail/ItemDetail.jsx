import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, img, category, description, stock, price }) => {
    return (
      <article>
        <h1>{name}</h1>
        <img src={img} style={{ width: 300 }} alt={name} />
        <p>Category: {category}</p>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <h2>Price: ${price}</h2>
        <ItemCount/>
      </article>
    );
  };
