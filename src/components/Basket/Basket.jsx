import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import "./basket.scss";

function Basket({ active, setClose }) {
  const card = useSelector((state) => state);

  return (
    <div className={`basket ${active ? "active" : ""}`}>
      <div className="basket-container">
        <IoMdClose
          onClick={() => setClose(!active)}
          className="basket-container-close"
        />
      </div>
      <div className="basket-container-list">
        {card["name"].card.map((item, index) => (
          <div key={index} className="basket-container-list-item">
            <img
              className="basket-container-list-item-image"
              src={item.image}
              alt="product"
            />
            <div className="basket-container-list-item-info">
              <h1 className="basket-container-list-item-info-title">
                {item.description}
              </h1>
              <h3 className="basket-container-list-item-info-count">
                Count: {item.count}
              </h3>
              <h3 className="basket-container-list-item-info-price">
                Price: {`$${item.price * item.count}`}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
