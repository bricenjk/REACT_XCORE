import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfiguration/firebaseConfig';
import { DocumentData } from 'firebase/firestore';

interface Product {
  data: DocumentData;
  id: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  function getProduct() {
    const productCollectionRef = collection(db, 'Article');
    getDocs(productCollectionRef)
      .then(response => {
        const products = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProducts(products);
      })
      .catch((error) => console.log(error.message));
  }
  
  return (
    <div>
      Liste des produits
    </div>
  );
};

export default ProductList;
