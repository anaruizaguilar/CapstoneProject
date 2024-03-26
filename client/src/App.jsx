import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, SingleProduct, Register, Login } from './Fake_Store_API';
import './App.css'
import Navbar from './components/Navbar';
import Account from './pages/Account';


function App() {
  
const [token, setToken] = useState(localStorage.getItem('token'));

  return (
  <>
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login token={token} setToken={setToken}/>}></Route>
        <Route path='/account/:id' element={<Account token={token}/>}></Route>
      </Routes>
    </div>
  </>
  )
}

export default App
