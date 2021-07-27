import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.scss";
import Feed from "../../components/Feed";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=3676a6670f8f4773a49871ceab6d1145"
      );
      const myFeeds = data.articles.map((a, i) => {
        return { i, a };
      });
      setProducts(myFeeds);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div key={product.i}>
            <Feed product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
