import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from './Fake_Store_API';
import './App.css'


function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
