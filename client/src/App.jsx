import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, SingleProduct, Register, Login, fetchProducts, Cart } from './Fake_Store_API';
import './App.css'
import Navbar from './components/Navbar';
import Account from './pages/Account';
import CheckoutPage from './pages/CheckoutPage';
import Categories from './components/Categories';


function App() {
  
const [token, setToken] = useState(localStorage.getItem('token' || null));
const [products, setProducts] = useState([]);
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart' || [] )));
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user' || null)));                                              

useEffect(() => {
  const getAllProducts = async () => {
    const allProducts = await fetchProducts();
    setProducts(allProducts);
  };
  getAllProducts();
}, [])


useEffect(() => {
  if(token) {
    localStorage.setItem("token", token);
    const userObj = JSON.stringify(user);
    localStorage.setItem("user", userObj);
    const cartArr = JSON.stringify(cart);
    localStorage.setItem("cart", cartArr);
    // console.log(token, userObj, cartArr);
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  }
}, [token, cart, user]);

  return (
  <>
    <Navbar token={token} />
    <div>
      <Routes>
        <Route path='/' element={<Home products={products} cart={cart} setCart={setCart}/>}></Route>
        <Route path='/products/:id' element={<SingleProduct cart={cart} setCart={setCart}/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login setToken={setToken} setUser={setUser} products={products} setCart={setCart}/>}></Route>
        <Route path='/account/:id' element={<Account token={token} setToken={setToken} user={user} cart={cart}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} products={products} setCart={setCart} user={user}/>}></Route>
        <Route path='/checkout' element={<CheckoutPage />}></Route>
        <Route path='/categories/:categoryItem/*' element={<Categories products={products} setCart={setCart} cart={cart}/>}></Route>
      </Routes>
    </div>
  </>
  )
}

export default App
