import React from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}€</p>
      <img src={product.imageUrl} alt={product.name}/>
    </div>
  );
};

// Pour la partie affichage --> Redux call API (Lien Front avec Firebase)


export default ProductItem;


