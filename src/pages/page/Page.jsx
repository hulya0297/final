import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import { Link } from "react-router-dom";
import "./page.scss";
import Subscribe from "../../shared/subscribe/Subscribe";
function Page() {
  return (
    <main className="page">
      {/* banner */}
      <section className="page_banner">
        <aside className="page_banner_leftside">
          <img
            className="page_banner_leftside_img"
            src={leftimg}
            alt="leftimg"
          />
        </aside>
        <div className="page_banner_content">
          <h2 className="page_banner_content_title">My Cart</h2>
          <span className="page_banner_content_text">
            <Link to="/" className="page_banner_content_text_link">
              Home
            </Link>
            /
          </span>
          <span className="page_banner_content_text">
            <Link to="/store">Shop</Link>/
          </span>
          <span className="page_banner_content_text">
            <Link to="/page" className="active">
              My Cart
            </Link>
          </span>
        </div>
        <aside className="page_banner_rightside">
          <img
            className="page_banner_rightside_img"
            src={rightimg}
            alt="rightimg"
          />
        </aside>
      </section>
      {/* banner */}

      {/* note */}
      <section className="note">
        <h4 className="note_title">Add Note</h4>
        <div className="note_container">
          <div className="note_container_input">
            <textarea
              className="note_container_input_message"
              cols="156"
              rows="10"
            ></textarea>
          </div>
          <div className="note_container_input">
            <h4 className="note_title">PROMO CODE</h4>
            <input className="note_container_input_item" type="text" />
            <button className="note_container_input_applybtn">Apply</button>
          </div>
          <div className="note_container_subtotal">
            <span>
              SUBTOTAL
             
            </span>
            <span> 900$</span>
            <button className="note_container_subtotal_checkout">
              Proceed to checkout
              
            </button>
       
          </div>
          
        </div>
      </section>
      {/* note */}

      <Subscribe />
    </main>
  );
}

export default Page;
