import Navbar from "../Navigation/Navbar";
import ProductList from "../Product/ProductList";

const Home = () => {
    return (
        <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', top: 0, left: 0, backgroundColor: 'red'}}><Navbar/></div>
            <div style={{position: 'absolute', top: 50, left: 0, backgroundColor: 'blue'}}><ProductList/></div>
        </div>
    )
}

export default Home;
