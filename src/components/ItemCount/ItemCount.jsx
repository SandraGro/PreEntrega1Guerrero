import React, { useState } from 'react';

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = (count) => {
    // TODO:Add onAdd function
    // This will be added in the next assignment if required :)
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button className="btn btn-outline-secondary " onClick={handleDecrement} disabled={count === 1} style={{ display: 'inline', margin: '5px'}}>-</button>
      <span>{count}</span>
      <button  className="btn btn-outline-secondary " onClick={handleIncrement} disabled={count === stock} style={{ display: 'inline', margin: '5px' }}>+</button>
      <button className="btn btn-primary" onClick={handleAdd} disabled={stock === 0} style={{ display: 'block' }}>Add to Cart</button>
      </div>
  );
};
