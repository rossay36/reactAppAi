import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import { Home, Footer, About, Contact, Artical, Product } from "./components";
import { Homes, Contacts, Products, Article, Abouts } from "./pages";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product" element={<Products />} />
          <Route path="/artical" element={<Article />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
