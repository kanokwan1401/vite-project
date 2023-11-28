import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails.tsx'
import CartForm from './pages/CartForm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/product-details' element={<ProductDetails />}/>
        <Route path='/product-cart' element={<CartForm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
