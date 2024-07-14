import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
