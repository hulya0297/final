import "./home.scss";
import choose_img from "../../assets/image/img1.jpg";

import { PiPottedPlantBold, PiVan, PiGiftBold } from "react-icons/pi";
import { GiCactusPot, GiFlowerPot } from "react-icons/gi";
import { HiMiniArrowPath } from "react-icons/hi2";
import home_logo from "../../assets/image/img2.png";
import { LuPhone } from "react-icons/lu";
import Subscribe from "../../shared/subscribe/Subscribe";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import shopNow1 from "../../assets/image/homeimg/shop1.jpg";
import shopNow2 from "../../assets/image/homeimg/shop2.jpg";
import Countdown from "../../components/CountDown/Countdown";

function Home() {
  return (
    <main className="main_container">
      <section className="choose">
        <aside className="choose_aside">
          <img src={choose_img} alt="" />{" "}
        </aside>

        <article className="choose_content">
          <h2 className="choose_content_title">
            Why choose us?
            <p className="choose_content_underline"></p>
          </h2>

          <p className="choose_content_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            fugit aliquid accusamus eaque nihil quae, recusandae, esse quam
            expedita dolore placeat vero ipsam quas minus. Aliquid eligendi
            dignissimos aliquam eos placeat vero ipsam quas minus?
            <span className="choose_content_text_more">...Learn more</span>
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
      <section className="featuredProductSec">
        <h2 className="featuredProductSec_title">Featured Product</h2>
        <img src={home_logo} alt="product_logo" />
        <p className="featuredProductSec_text">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Card />
      </section>

      {/* Featured Product card */}

      {/* section about */}
      <section className="about">
        <ul className="about_list">
          <li className="about_list_item">
            <PiVan className="about_list_item_icons" />{" "}
            <div className="about_list_item_content">
              <h3 className="about_list_item_content_title">
                Free shipping order
              </h3>
              <p className="about_list_item_content_text">
                On orders over $100
              </p>
            </div>
          </li>
          <li className="about_list_item">
            <PiGiftBold className="about_list_item_icons" />{" "}
            <div className="about_list_item_content">
              <h3 className="about_list_item_content_title">
                Special gift card
              </h3>
              <p className="about_list_item_content_text">
                The perfect gift idea
              </p>
            </div>
          </li>
          <li className="about_list_item">
            <HiMiniArrowPath className="about_list_item_icons" />{" "}
            <div className="about_list_item_content">
              <h3 className="about_list_item_content_title">
                Return & exchange
              </h3>
              <p className="about_list_item_content_text">
                Free return within 3 days
              </p>
            </div>
          </li>
          <li className="about_list_item">
            <LuPhone className="about_list_item_icons" />{" "}
            <div className="about_list_item_content">
              <h3 className="about_list_item_content_title">Support 24 / 7</h3>
              <p className="about_list_item_content_text">Customer support</p>
            </div>
          </li>
        </ul>
      </section>

      {/* section about */}

      {/* shopNow */}
      <section className="shopNow">
        <aside className="shopNow_side">
          <Link to="/store">
            <img src={shopNow1} alt="shop" />
          </Link>
        </aside>
        <aside className="shopNow_side">
          <Link to="/store">
            <img src={shopNow2} alt="shop" />
          </Link>
        </aside>
      </section>
      {/* shopNow */}

      {/* daily deal */}
      <section className="dailyDeal">
        <h2 className="dailyDeal_title">Daily Deal</h2>
        <img src={home_logo} alt="logo" />
        <p className="dailyDeal_text">
          There are many variations of passages of lorem ipsum available.
        </p>
        <Countdown />
      </section>
      {/* daily deal */}
      <Subscribe />
    </main>
  );
}

export default Home;
