import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={product.a.urlToImage} alt="" />
      </div>
      <div className="">
        <div className="py-1">
          <h4>
            <a className="date-color" href={`/articles/${product?.i}`}>
              {product.a.publishedAt}
            </a>
          </h4>
          <h3>
            <a href={`/articles/${product.i}`}>{product.a.title}</a>
          </h3>
          <p>{product.a.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
