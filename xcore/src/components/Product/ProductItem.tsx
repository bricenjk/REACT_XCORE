import React from 'react';

interface ProductItemProps {
  name: string;
  description: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price} €</p>
    </div>
  );
};

export default ProductItem;
