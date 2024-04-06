
import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import { Link } from "react-router-dom";
import "./store.scss";
import Subscribe from "../../shared/subscribe/Subscribe";
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
      <Subscribe/>
   
    </main>
  );
}

export default store;
