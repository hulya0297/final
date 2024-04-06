import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";
import "./carditem.scss";

function CardItem({ product }) {
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
                <MdOutlineShoppingCart className="featuredProduct_cards_content_overlay_overlayMenu_icon" />
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
          <p className="featuredProduct_cards_content_price">{product.price}</p>
        </div>
      </div>
    </section>
  );
}

export default CardItem;
