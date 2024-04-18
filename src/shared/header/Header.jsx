import "./header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import Basket from "../../components/Basket/Basket";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const body = document.querySelector("body");

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }, 270);
  }, [isOpen, body]);

  return (
    <header className="header">
      {/* <div className="header_navigation">
        <ul className="header_navigation_menu">
          <li className="header_navigation_menu_item">
          <RxHamburgerMenu className="header_navigation_menu_item_icon" />
          
          </li>
          <li className="header_navigation_menu_item">

          </li>
          <li className="header_navigation_menu_item">

          </li>
        </ul>
      </div> */}
      <nav className="navbar">
        <ul className="navbar_menu">
          <li className="navbar_menu_item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar_menu_item">
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              Store
            </NavLink>
          </li>
          <li className="navbar_menu_item">
            <NavLink
              to="/about "
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="navbar_menu_item">
            <img src={logo} alt="Logo" />
          </li>
          <li className="navbar_menu_item">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="navbar_menu_item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "navbar_menu_link active" : "navbar_menu_link"
              }
            >
              Contact
            </NavLink>
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
            <MdOutlineShoppingCart onClick={handleOpen} />
          </li>
          <Basket active={isOpen} setClose={setIsOpen} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
