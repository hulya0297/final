import { Link } from "react-router-dom";
import "./about.scss";
import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import aboutTeam from "../../assets/image/aboutImg/img3.jpg";
import aboutlogo from "../../assets/image/img2.png";
import man1 from "../../assets/image/aboutImg/man1.jpg";
import woman from "../../assets/image/aboutImg/woman.jpg";
import man2 from "../../assets/image/aboutImg/man2.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
  return (
    <main className="about">
      {/* about */}
      <section className="about_banner">
        <aside className="about_banner_leftside">
          <img
            className="about_banner_leftside_img"
            src={leftimg}
            alt="leftimg"
          />
        </aside>
        <div className="about_banner_content">
          <h2 className="about_banner_content_title">About Us</h2>
          <span className="about_banner_content_text">
            <Link to="/" className="about_banner_content_text_link">
              Home
            </Link>
            /
          </span>
          <span className="about_banner_content_text">
            <Link to="/about" className="active">
              About
            </Link>
          </span>
        </div>
        <aside className="about_banner_rightside">
          <img
            className="about_banner_rightside_img"
            src={rightimg}
            alt="rightimg"
          />
        </aside>
      </section>
      {/* about */}

      {/* aboutTeam */}
      <section className="aboutTeam">
        <aside className="aboutTeam_content">
          <h2 className="aboutTeam_content_title">
            A Minimal Team <br /> For a Better World
          </h2>
          <p className="aboutTeam_content_underline"></p>{" "}
          <p className="aboutTeam_content_text">
            Lorem Khaled Ipsum is a major key to success. The ladies always say
            Khaled you smell good, I use no cologne. Cocoa butter is the key. To
            succeed you must believe. When you believe, you will succeed. They
            will try to close the door on you, just open it. The key is to drink
            coconut, fresh coconut, trust me. It’s important to use cocoa
            butter. It’s the key to more success, why not live smooth?
          </p>
        </aside>
        <aside className="aboutTeam_image">
          <img className="aboutTeam_img " src={aboutTeam} alt="aboutTeam" />
        </aside>
      </section>

      {/* aboutTeam */}

      <section className="ourTeam">
        <h2 className="ourTeam_title">Meet Our Team</h2>
        <img src={aboutlogo} alt="" />
        <div className="ourTeam_people">
          <div className="ourTeam_people_card">
            <img className=" ourTeam_people_card_img " src={man1} alt="man" />
            <div className="ourTeam_people_card_over">
              <div className="ourTeam_people_card_over_social">
                <ul className="ourTeam_people_card_over_social_list">
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaFacebookF />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaTwitter />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    {" "}
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <h5 className="ourTeam_people_card_title">REDIKIEL</h5>
            <p className="ourTeam_people_card_profession">Co - Founder & CEO</p>
          </div>

          <div className="ourTeam_people_card">
            <img
              className=" ourTeam_people_card_img "
              src={woman}
              alt="woman"
            />
            <div className="ourTeam_people_card_over">
              <div className="ourTeam_people_card_over_social">
                <ul className="ourTeam_people_card_over_social_list">
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaFacebookF />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaTwitter />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    {" "}
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <h5 className="ourTeam_people_card_title">ANGELA</h5>
            <p className="ourTeam_people_card_profession">
              Chief Of Marketing Team
            </p>
          </div>
          <div className="ourTeam_people_card">
            <img className=" ourTeam_people_card_img " src={man2} alt="man2" />
            <div className="ourTeam_people_card_over">
              <div className="ourTeam_people_card_over_social">
                <ul className="ourTeam_people_card_over_social_list">
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaFacebookF />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    <FaTwitter />
                  </li>
                  <li className="ourTeam_people_card_over_social_list_icon">
                    {" "}
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <h5 className="ourTeam_people_card_title">KEVIN LEE</h5>
            <p className="ourTeam_people_card_profession">Art Director</p>
          </div>
        </div>
      </section>
      {/* ourTeam */}
      {/* subscribe */}

      <section className="subscribe">
        <div className="subscribe_container">
        <h2 className="subscribe_container_title">Subscribe Our Newsletter</h2>
        <img src={aboutlogo} alt="home_logo" />
        <p className="subscribe_container_text">
          Enter Your email address to join our mailing list and keep yourself
          update
        </p>
        <form className="subscribe_container_form">
          <input
            className="subscribe_container_form_input"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="subscribe_container_form_button">
            Shop Now
            <FaArrowRight  className="subscribe_container_form_button_icon"/>{" "}
          </button>
        </form>
        </div>
        
      </section>
      {/* subscribe */}
    </main>
  );
};

export default About;
