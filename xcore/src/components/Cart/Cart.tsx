import React from 'react';
import ProductItem from '../Product/ProductItem';

interface CartProps {
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <ProductItem key={item.id} name={item.name} description={item.description} price={item.price} />
      ))}
    </div>
  );
};

export default Cart;
