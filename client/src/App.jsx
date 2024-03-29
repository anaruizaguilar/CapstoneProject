import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, SingleProduct, Register, Login, fetchProducts, Cart } from './Fake_Store_API';
import './App.css'
import Navbar from './components/Navbar';
import Account from './pages/Account';


function App() {
  
const [token, setToken] = useState(localStorage.getItem('token'));
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [user, setUser] = useState(null);

useEffect(() => {
  const getAllProducts = async () => {
    const allProducts = await fetchProducts();
    setProducts(allProducts);
  };
  getAllProducts();
}, [])

  return (
  <>
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home products={products}/>}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login token={token} setToken={setToken} setUser={setUser} setCart={setCart}/>}></Route>
        <Route path='/account/:id' element={<Account token={token} user={user} cart={cart}/>}></Route>
        <Route path='/cart' element={<Cart />} cart={cart} products={products} setCart={setCart}></Route>
      </Routes>
    </div>
  </>
  )
}

export default App
