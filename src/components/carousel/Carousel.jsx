import logo1 from "../../assets/image/homeimg/sliderlogo1.png";
import logo2 from "../../assets/image/homeimg/sliderlogo2.png";
import logo3 from "../../assets/image/homeimg/sliderlogo3.png";
import logo4 from "../../assets/image/homeimg/sliderlogo4.png";
import logo5 from "../../assets/image/homeimg/sliderlogo5.png";
import logo6 from "../../assets/image/homeimg/sliderlogo6.png";
import "./carousel.scss";

const Carousel = () => {
  const images = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <img
            className="carousel-slides-image"
            src={image}
            alt="logo"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
