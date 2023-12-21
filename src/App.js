import React from "react";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
