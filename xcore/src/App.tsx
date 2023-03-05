import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Login from './Components/User/LoginForm/LoginForm';
import Cart from './Components/Cart/Cart';
import Profile from './Components/User/Profile';
import './App.css';
import RegisterForm from './Components/User/RegisterForm/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
