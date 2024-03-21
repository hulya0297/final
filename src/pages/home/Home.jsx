import "./home.scss";
import choose_img from "../../assets/image/img1.jpg";
import product_logo from "../../assets/image/img2.png";
import cardimg1 from "../../assets/image/cardimg1.jpg";
import { PiPottedPlantBold } from "react-icons/pi";
import { GiCactusPot, GiFlowerPot } from "react-icons/gi";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";
function Home() {
  return (
    <main className="main_container">
      <section className="choose">
        <aside className="choose_aside">
          <img src={choose_img} alt="" />{" "}
        </aside>

        <article className="choose_content">
          <h2 className="choose_content_title">Why choose us?
          <p className="underline"></p>
          </h2>
         
          <p className="choose_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            fugit aliquid accusamus eaque nihil quae, recusandae, esse quam
            expedita dolore placeat vero ipsam quas minus. Aliquid eligendi
            dignissimos aliquam eos placeat vero ipsam quas minus? 
            <span className="choose_content_text_more" >...Learn more</span>
           
          </p>
          <ul className="choose_content_list">
            <li className="choose_content_list_item">
              <PiPottedPlantBold className="choose_content_list_item_icon" />
              <div className="choose_list_item_text">
                <h3 className="choose_content_list_item_text_title">
                  Hand Planted
                </h3>
                <p className="choose_content_text">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </li>
            <li className="choose_content_list_item">
              <GiCactusPot className="choose_content_list_item_icon" />
              <div className="choose_content_list_item_text">
                <h3 className="choose_content_list_item_text_title">
                  Natural Sunlight
                </h3>
                <p className="choose_content_text">
                  It is a long established fact that a reader will be distracted
                  by the reable content of a page.
                </p>
              </div>
            </li>
            <li className="choose_content_list_item">
              <GiFlowerPot className="choose_content_list_item_icon" />
              <div className="choose_content_list_item_text">
                <h3 className="choose_content_list_item_text_title">
                  Clean Air
                </h3>
                <p className="choose_content_text">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </section>

      {/* Featured Product card */}
      <section className="featuredProduct">
        <h2 className="featuredProduct_title">Featured Product</h2>
        <img src={product_logo} alt="product_logo" />
        <p className="featuredProduct_text">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="featuredProduct_cards">
          <div className="featuredProduct_cards_imgs">
            <img
              className="featuredProduct_cards_imgs_img"
              src={cardimg1}
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
            <p className="featuredProduct_cards_content_text">Sit voluptatem</p>
            <p className="featuredProduct_cards_content_price" > 68.00 $</p>
          </div>
        </div>
      </section>
      {/* Featured Product card */}


    </main>
  );
}

export default Home;
