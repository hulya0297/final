import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";
import "./carditem.scss";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/slice";
import { useState } from "react";

function CardItem({ product }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCard({
        id: product.id,
        description: product.description,
        image: product.image,
        price: product.price,
        count,
      })
    );
  };

  return (
    <section className="featuredProduct">
      <div className="featuredProduct_cards">
        <div className="featuredProduct_cards_imgs">
          <img
            className="featuredProduct_cards_imgs_img"
            src={product.image}
            alt="cardimg1"
          />
        </div>
        <div className="featuredProduct_cards_content">
          <div className="featuredProduct_cards_content_overlay">
            <ul className="featuredProduct_cards_content_overlay_overlayMenu">
              <li className="featuredProduct_cards_content_overlay_overlayMenu_item1">
                <MdFavoriteBorder className="featuredProduct_cards_content_overlay_overlayMenu_icon" />
              </li>
              <li className="featuredProduct_cards_content_overlay_overlayMenu_item2">
                <MdOutlineShoppingCart
                  onClick={handleAddToCart}
                  className="featuredProduct_cards_content_overlay_overlayMenu_icon"
                />
              </li>
              <li className="featuredProduct_cards_content_overlay_overlayMenu_item2">
                <MdOutlineRemoveRedEye className="featuredProduct_cards_content_overlay_overlayMenu_icon" />
              </li>
              <li className="featuredProduct_cards_content_overlay_overlayMenu_item3">
                <TiArrowRepeat className="featuredProduct_cards_content_overlay_overlayMenu_icon" />
              </li>
            </ul>
          </div>
          <p className="featuredProduct_cards_content_text">
            {product.description}
          </p>
          <p className="price">
            <span className="price-old">{product.oldprice}</span>
            <span className="price-new">{`${product.price}$`}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardItem;
