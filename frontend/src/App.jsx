import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Productcreate from "./pages/Productcreate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Productcreate" element={<Productcreate/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
