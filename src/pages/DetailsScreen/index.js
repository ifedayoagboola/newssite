import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DetailsScreen.scss";

import Comments from "../../components/Comments";

const DetailsScreen = ({ match }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=3676a6670f8f4773a49871ceab6d1145"
      );
      const myFeeds = data.articles.filter(
        (a, i) => i === parseInt(match.params.id)
      );
      setProducts(myFeeds);
    };
    fetchProducts();
  }, []);
  console.log({ products });
  return (
    <div className="details">
      <h1>Details Page</h1>
      {products?.map((product, i) => (
        <div className="content" key={i}>
          <div className="image">
            <img src={product.urlToImage} alt="" />
          </div>
          <div className="">
            <div className="py-1">
              <h4 className="date-color">{product.publishedAt}</h4>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.content}</p>
              <h4 className="text-color">Written by: {product.author}</h4>
              <h4 className="text-color">Source {product.url}</h4>
            </div>
          </div>
          <Comments />
        </div>
      ))}
    </div>
  );
};

export default DetailsScreen;
