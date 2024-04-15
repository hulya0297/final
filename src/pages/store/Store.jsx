import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import { Link } from "react-router-dom";
import "./store.scss";
import Subscribe from "../../shared/subscribe/Subscribe";
import Card from "../../components/Card/Card";
import { MdOutlineSearch } from "react-icons/md";
import store1 from "../../assets/image/storeImg/img1.jpg";
import store2 from "../../assets/image/storeImg/img2.jpg";
import store3 from "../../assets/image/storeImg/img3.jpg";
import store4 from "../../assets/image/storeImg/img4.jpg";
import store5 from "../../assets/image/storeImg/img5.jpg";
import { SiWindows } from "react-icons/si";
import { MdOutlineFormatListBulleted } from "react-icons/md";

function store() {
  return (
    <main className="store">
      <section className="store_banner">
        <aside className="store_banner_leftside">
          <img
            className="store_banner_leftside_img"
            src={leftimg}
            alt="leftimg"
          />
        </aside>
        <div className="store_banner_content">
          <h2 className="store_banner_content_title">Store </h2>
          <span className="store_banner_content_text">
            <Link to="/" className="store_banner_content_text_link">
              Home
            </Link>
            /
          </span>
          <span className="store_banner_content_text">
            <Link to="/store" className="active">
              Store
            </Link>
          </span>
        </div>
        <aside className="store_banner_rightside">
          <img
            className="store_banner_rightside_img"
            src={rightimg}
            alt="rightimg"
          />
        </aside>
      </section>
      <section className="productsSec">
        <aside className="productsSec_products">
          <div className="productsSec_products_search">
            <input
              className="productsSec_products_search_input"
              type="search"
              placeholder="Search"
            />

            <MdOutlineSearch className="productsSec_products_search_icon" />
          </div>

          <div className="productsSec_products_category">
            <h5 className="productsSec_products_title">PRODUCT CATEGORIES</h5>
            <ul className="productsSec_products_category_list">
              <li className="productsSec_products_category_list_item">
                <div className="productsSec_products_category_list_item_content">
                  Dried{" "}
                </div>
                <span className="productsSec_products_category_list_item_count">
                  6
                </span>
              </li>
              <li className="productsSec_products_category_list_item">
                <div className="productsSec_products_category_list_item_content">
                  Vegetables{" "}
                </div>
                <span className="productsSec_products_category_list_item_count">
                  8
                </span>
              </li>
              <li className="productsSec_products_category_list_item">
                <div className="productsSec_products_category_list_item_content">
                  Fruits{" "}
                </div>
                <span className="productsSec_products_category_list_item_count">
                  9
                </span>
              </li>
              <li className="productsSec_products_category_list_item">
                <div className="productsSec_products_category_list_item_content">
                  Juice{" "}
                </div>
                <span className="productsSec_products_category_list_item_count">
                  6
                </span>
              </li>
              <li className="productsSec_products_category_list_item">
                <div className="productsSec_products_category_list_item_content">
                  Uncategorized
                </div>
                <span className="productsSec_products_category_list_item_count">
                  1
                </span>
              </li>
            </ul>
          </div>
          <div className="productsSec_products_filter">
            <h5 className="productsSec_products_title">FILTER BY PRICE</h5>
            <div className="productsSec_products_filter_price">
              
              <button className="productsSec_products_filter_price_btn">
                Filter
              </button>
              <span className="productsSec_products_filter_price_cost">
                Price: $0 - $75
              </span>
            </div>
          </div>

          <div className="productsSec_products_topRare">
            <h5 className="productsSec_products_title">TOP RATE</h5>
            <ul className="productsSec_products_topRare_list">
              <li className="productsSec_products_topRare_list_item">
                <div className="productsSec_products_topRare_list_item_img">
                  <img src={store1} alt="" />
                </div>
                <div className="productsSec_products_topRare_list_item_desc">
                  <p>Vitamin C face wash</p>
                  <p className="productsSec_products_topRare_list_item_desc_money">
                    21.00$
                  </p>
                </div>
              </li>
              <li className="productsSec_products_topRare_list_item">
                <div className="productsSec_products_topRare_list_item_img">
                  <img src={store2} alt="" />
                </div>
                <div className="productsSec_products_topRare_list_item_desc">
                  <p>Organic vegetables</p>
                  <p className="productsSec_products_topRare_list_item_desc_money">
                    21.00$
                  </p>
                </div>
              </li>
              <li className="productsSec_products_topRare_list_item">
                <div className="productsSec_products_topRare_list_item_img">
                  <img src={store3} alt="" />
                </div>
                <div className="productsSec_products_topRare_list_item_desc">
                  <p>Organic cabbage</p>
                  <p className="productsSec_products_topRare_list_item_desc_money">
                    21.00$
                  </p>
                </div>
              </li>
              <li className="productsSec_products_topRare_list_item">
                <div className="productsSec_products_topRare_list_item_img">
                  <img src={store4} alt="" />
                </div>
                <div className="productsSec_products_topRare_list_item_desc">
                  <p>Organic vegetables</p>
                  <p className="productsSec_products_topRare_list_item_desc_money">
                    21.00$
                  </p>
                </div>
              </li>
              <li className="productsSec_products_topRare_list_item">
                <div className="productsSec_products_topRare_list_item_img">
                  <img src={store5} alt="" />
                </div>
                <div className="productsSec_products_topRare_list_item_desc">
                  <p>Vitamin C face wash</p>
                  <p className="productsSec_products_topRare_list_item_desc_money">
                    21.00$
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <aside className="productsSec_products_cards">
          <div className="productsSec_products_cards_nav">
            <div className="productsSec_products_cards_nav_filter">
              <ul className="productsSec_products_cards_nav_filter_list">
                <li className="productsSec_products_cards_nav_filter_list_item">
                  <SiWindows className="productsSec_products_cards_nav_filter_list_item_icon" />
                </li>
                <li className="productsSec_products_cards_nav_filter_list_item">
                  <MdOutlineFormatListBulleted className="productsSec_products_cards_nav_filter_list_item_icon" />
                </li>
                <li className="productsSec_products_cards_nav_filter_list_item_page">
                  Showing 1–9 of 24 results
                </li>
              </ul>
            </div>
            <div className="productsSec_products_cards_nav_sorting">
              <label className="productsSec_products_cards_nav_sorting_name">
                {" "}
                Sort by:
              </label>
              <select className="productsSec_products_cards_nav_sorting_option">
                <option>Default sorting</option>
                <option>Default Order</option>
                <option>Default Order</option>
                <option>Default Order</option>
              </select>
            </div>
          </div>
          <Card />
        </aside>
      </section>

      <Subscribe />
    </main>
  );
}

export default store;
