import React from 'react'
import {  
         Route, 
         createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider } from 'react-router-dom'


import './App.css'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import Layout from './components/Layout'
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Photos />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
