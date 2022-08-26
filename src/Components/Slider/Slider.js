import { useEffect, useState } from "react";
import "./Slider.css";
import { sliderItems } from "../Data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    console.log(direction);
    if (direction === "left") {
      // console.log(slideIndex);
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      // console.log(slideIndex);
      setSlideIndex(slideIndex >= 2 ? 0 : slideIndex + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => handleClick("right"), 5000);
  }, [slideIndex]);

  return (
    <section className="Slider">
      <div className="SliderContainer">
        <div
          className="Arrow"
          style={{ left: "10px" }}
          onClick={() => handleClick("left")}
        >
          <KeyboardArrowLeftIcon />
        </div>
        <div
          className="Wrapper"
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        >
          {sliderItems.map((data) => {
            const { bg, title, img, desc, id } = data;
            // console.log(bg);
            return (
              <div className="Slide" key={id} style={{ background: `#${bg}` }}>
                <div className="ImgContainer">
                  <img src={img} alt="" />
                </div>
                <div className="InfoContainer">
                  <h1 className="info-title">{title}</h1>
                  <p className="info-desc">{desc}</p>
                  <button className="info-button">Show Now</button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          direction="right"
          className="Arrow"
          style={{ right: "10px" }}
          onClick={() => handleClick("right")}
        >
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </section>
  );
};

export default Slider;
