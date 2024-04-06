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
import Subscribe from "../../shared/subscribe/Subscribe";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import introSecimg from "../../assets/image/aboutImg/img4.png";

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
      {/* Counter Section */}
      <section className="counterSec">
        <ul className="counterSec_list">
          <li className="counterSec_list_item">
            <h2 className="counterSec_list_item_count">229</h2>
            <p className="counterSec_list_item_content">HAPPY CLIENTS</p>
          </li>
          <div className="border"></div>
          <li className="counterSec_list_item">
            <h2 className="counterSec_list_item_count">109</h2>
            <p className="counterSec_list_item_content">COMPLETED PROJECT</p>
          </li>
          <div className="border"></div>
          <li className="counterSec_list_item">
            <h2 className="counterSec_list_item_count">22</h2>
            <p className="counterSec_list_item_content">AWESOME STAFF</p>
          </li>
          <div className="border"></div>
          <li className="counterSec_list_item">
            <h2 className="counterSec_list_item_count">11</h2>
            <p className="counterSec_list_item_content">WINNING AWARDS</p>
          </li>
        </ul>
      </section>
      {/* Counter Section */}

      {/* introSec */}

      <section className="introSec">
        <aside className="introSec_img">
          <img src={introSecimg} alt="" />
        </aside>
        <article className="introSec_accordion">
          <AccordionItem />
        </article>
      </section>
      {/* introSec */}

      {/* delevery prosses */}
      <section className="deleveryPross">
        <h2 className="deleveryPross_title">Delivery Process</h2>
        <img src={aboutlogo} alt="" />

        <div className="grid_container">
          <div className="grid_container_topright">
            <div className="grid_container_clipPathright"></div>
            <div className="grid_container_step">
              <p>STEP 01</p>
            </div>
            <h4 className="grid_container_title">CHOOSE YOUR PRODUCTS</h4>
            <p className="grid_container_text">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour. Both betanin
            </p>
          </div>
          <div className="grid_container_topleft">
          <div className="grid_container_clipPathleft"></div>
            <div className="grid_container_step">
              <p>STEP 02</p>
            </div>
            <h4 className="grid_container_title">CONNECT NEAREST STORED</h4>
            <p className="grid_container_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="grid_container_bottomright">
          <div className="grid_container_clipPathright"></div>
            <div className="grid_container_step">
              <p>STEP 03</p>
            </div>
            <h4 className="grid_container_title">SHARE YOUR LOCATION</h4>
            <p className="grid_container_text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore
            </p>
          </div>
          <div className="grid_container_bottomleft">
          <div className="grid_container_clipPathleft"></div>
            <div className="grid_container_step">
              <p>STEP 04</p>
            </div>
            <h4 className="grid_container_title">GET DELIVERED FAST</h4>
            <p className="grid_container_text">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment.
            </p>
          </div>
        </div>
      </section>
      {/* delevery prosses */}

      {/* ourteam */}

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
      <Subscribe />
    </main>
  );
};

export default About;
