import { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import "./card.scss";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3300/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="cardflex">
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Card;
