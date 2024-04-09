import { FaArrowRight } from "react-icons/fa6";
import home_logo from "../../assets/image/img2.png";
import "./subscribe.scss";

function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <div className="subscribe_container">
          <h2 className="subscribe_container_title">
            Subscribe Our Newsletter
          </h2>
          <img
            className="subscribe_container_logo"
            src={home_logo}
            alt="home_logo"
          />
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
              <FaArrowRight className="subscribe_container_form_button_icon" />{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
