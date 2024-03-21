import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { VscMail } from "react-icons/vsc";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaGooglePlusG } from "react-icons/fa";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className="contact footer_flex">
        <h3 >Contact us</h3>
        <ul className="contact_list footer_list">
          <li className="contact_list_item">
            <CiLocationOn />
            <span className="contact_list_item_text">
              {" "}
              Address: London Oxford Street, 012 United Kingdom.
            </span>
          </li>
          <li className="contact_list_item">
            {" "}
            <FiPhone /> Phone :
            <Link to="/" className="contact_list_item_link footer_hover">
              {" "}
              (+032) 3456 7890
            </Link>
          </li>
          <li className="contact_list_item">
            <VscMail />
            Email:
            <Link to="/" className="contact_list_item_link footer_hover">
              {" "}
              Botanicalstore@gmail.com
            </Link>
          </li>
        </ul>
        <ul className="contact_social ">
          <li className=" contact_list_item_text">Follow us:</li>
          <li className="contact_social_list">
            <GrFacebookOption className="contact_social_list_icon footer_hover" />
            <FaTwitter className="contact_social_list_icon footer_hover" />
            <FaPinterest className="contact_social_list_icon footer_hover" />
            <FaGooglePlusG className="contact_social_list_icon footer_hover" />
          </li>
        </ul>
      </div>
      <div className="information footer_flex">
        <h3>Information</h3>
        <ul className="information_list footer_list">
          <li className="information_list_item footer_hover">New Products</li>
          <li className="information_list_item footer_hover">Top Sellers</li>
          <li className="information_list_item footer_hover">Our Blog</li>
          <li className="information_list_item footer_hover">About Our Shop</li>
          <li className="information_list_item footer_hover">Privacy policy</li>
        </ul>
      </div>
      <div className="myAccount footer_flex">
        <h3> My Account</h3>
        <ul className="myAccount_list footer_list">
          <li className="myAccount_list_item footer_hover">My account</li>
          <li className="myAccount_list_item footer_hover">Discount</li>
          <li className="myAccount_list_item footer_hover">Orders history</li>
          <li className="myAccount_list_item footer_hover">
            Personal information
          </li>
        </ul>
      </div>

      <div className="popularTag footer_flex">
        <h3 className="popularTag_title">Popular Tags</h3>
        <div className="popularTag_containers">
          <div className="popularTag_containers_buttons">
            <button className="popularTag_containers_buttons_item ">
              Trend
            </button>
            <button className="popularTag_containers_buttons_item ">
              Plant
            </button>
            <button className="popularTag_containers_buttons_item ">
              Bedroom tree
            </button>
          </div>
          <div className="popularTag_containers_buttons2">
            <button className="popularTag_containers_buttons_item ">
              Decor
            </button>
            <button className="popularTag_containers_buttons_item ">
              Table tree
            </button>
            <button className="popularTag_containers_buttons_item ">
              Living room
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
