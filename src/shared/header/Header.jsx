import "./header.scss";
import {  Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar_menu">
          <li className="navbar_menu_item">
            <Link
              to="/home"
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              Home
            </Link>
          </li>
          <li className="navbar_menu_item">
            <Link to="/store" className="navbar_menu_link">
              Store
            </Link>
          </li>
          <li className="navbar_menu_item">
            <Link to="/about " className="navbar_menu_link">
              About
            </Link>
          </li>
          <li className="navbar_menu_item">
            <img src={logo} alt="Logo" />
          </li>
          <li className="navbar_menu_item">
            <Link to="/blog" className="navbar_menu_link">
              Blog
            </Link>
          </li>
          <li className="navbar_menu_item">
            <Link to="/page" className="navbar_menu_link">
              Pages
            </Link>
          </li>
          <li className="navbar_menu_item">
            <Link to="/contact" className="navbar_menu_link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icons_container">
        <ul className="icons_container_list">
          <li className="icons_conatiner_list_item">
            {" "}
            <CiSearch />
          </li>
          <li className="icons_conatiner_list_item">
            {" "}
            <CiHeart />
          </li>
          <li className="icons_conatiner_list_item">
            {" "}
            <MdOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
