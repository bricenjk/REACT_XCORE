import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfiguration/firebaseConfig";
import { DocumentData } from "firebase/firestore";

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
    const productCollectionRef = collection(db, "Article");
    getDocs(productCollectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProducts(products);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700" />
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {product.data.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.data.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {product.data.price}
                  </div>
                </div>
              </li>
              <div />
              <ul />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
