import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { Carousel } from "antd";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, [error]);

  return (
    <div className="product">
      <h1>Our Product</h1>

      <div className="product__container">
        {products.map((product, index) => (
          <div className="product__list">
            <div key={index}>
              <h3>{product.id}</h3>
              <img src={product.thumbnail} />
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Title
                </span>
                = {product.title}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Description
                </span>
                = {product.description}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  DiscountPercentage
                </span>
                = {product.discountPercentage}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Rating
                </span>
                = {product.rating}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Stock
                </span>
                = {product.stock}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Brand
                </span>
                = {product.brand}.
              </p>
              <p>
                <span style={{ color: "white", fontSize: "1.3rem" }}>
                  Category
                </span>
                = {product.category}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
