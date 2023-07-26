import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from '../HomePage/HomePage'

import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'


export default function App() {


  return (
   <main className="App">
      <>
        <NavBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
      </>
   </main>
  )
}


