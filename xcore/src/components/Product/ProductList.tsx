import  {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
// import ProductItem from './ProductItem';
import {db} from '../../FirebaseConfiguration/firebaseConfig'

// interface ProductListProps {
//   products: Product[];
// }

// const ProductList: React.FC<ProductListProps> = ({ products }) => {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;


const ProductList = () => {
  const [product, setProdcut] = useState([]);
  function getProduct() {
    const productCollectionRef = collection(db, 'Store');
    getDocs(productCollectionRef).then((response) => {console.log(response.docs)})
    .catch((error) => console.log(error.message));}

    useEffect(() => {
      getProduct();
    }, [])
  
    return (
    <div>
      Liste des produits
    </div>
  )
}

export default ProductList
