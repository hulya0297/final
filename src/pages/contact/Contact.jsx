import { Link } from "react-router-dom";
import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import "./contact.scss";

import { FaLocationDot, FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <main className="contact">
      {/* contact */}
      <section className="contact_banner">
        <aside className="contact_banner_leftside">
          <img
            className="contact_banner_leftside_img"
            src={leftimg}
            alt="leftimg"
          />
        </aside>
        <div className="contact_banner_content">
          <h2 className="contact_banner_content_title">Contact</h2>
          <span className="contact_banner_content_text">
            <Link to="/" className="contact_banner_content_text_link">
              Home
            </Link>
            /
          </span>
          <span className="contact_banner_content_text">
            <Link to="/contact" className="active">
              Contact
            </Link>
          </span>
        </div>
        <aside className="contact_banner_rightside">
          <img
            className="contact_banner_rightside_img"
            src={rightimg}
            alt="rightimg"
          />
        </aside>
      </section>
      {/* contact */}
      {/* contact info */}
      <section className="contact_info">
        <div className="contact_info_item">
          <div className="contact_info_item_icons">
            <FaLocationDot className="contact_info_item_icons_icon" />
          </div>
          <h5 className="contact_info_item_title">ADDRESS</h5>
          <p className="contact_info_item_text">
            7th floor - Palace Building - 221B Walk of Fame - <br /> London - UK
          </p>
        </div>
        <div className="contact_info_item">
          <div className="contact_info_item_icons ">
            <FaHeadphones className="contact_info_item_icons_icon" />
          </div>
          <h5 className="contact_info_item_title">PHONE</h5>
          <p className="contact_info_item_text">
            (+84) - 123 - 456 - 789 <br /> (+84) - 321 - 654 - 987
          </p>
        </div>
        <div className="contact_info_item border">
          <div className="contact_info_item_icons">
            <MdEmail className="contact_info_item_icons_icon" />
          </div>
          <h5 className="contact_info_item_title">EMAIL</h5>
          <p className="contact_info_item_text">
            Two-support@Two.lnk <br /> info@Two.lnk
          </p>
        </div>
      </section>

      {/* contact info */}

      {/* map section */}
      <section className="section_map">
        <iframe
          title="map"
          style={{ border: "0", height: "400px", width: "100%" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
      {/* map section */}

      {/* contact touch */}
      <section className="contact_touch">
        <h2 className="contact_touch_title">Get In Touch</h2>
        <p className="contact_touch_text">
          Lorem ipsum dolor consectetuer adipiscing elit sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna <br />
          aliquam erat volutpatcommodo consequat.
        </p>
        <div className="contact_touch_input">
          <input
            className="contact_touch_input_item"
            type="text"
            placeholder="Your name *"
            required
          />
          <input
            className="contact_touch_input_item"
            type="email"
            placeholder="Your email *"
            required
          />
          <input
            className="contact_touch_input_item"
            type="tel"
            placeholder="Telephone number *"
          />
        
        </div>
        <textarea
            className="contact_touch_textarea"
            name="message"
            cols="150"
            rows="10"
            placeholder="Message..."
          ></textarea>
        <button className="contact_touch_btn">Send Message</button>
      </section>

      {/* contact touch*/}
    </main>
  );
};

export default Contact;
