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
    const productCollectionRef = collection(db, "Store");
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
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products.map((product) => (
          <div
            className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
            key={product.id}
          >
            <div className="shrink-0"></div>
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={product.data.image}
                alt="Neil image"
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">
                <p>{product.data.nom}</p>
              </div>
              {product.data.prix} $
              <p className="text-slate-500">{product.data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
