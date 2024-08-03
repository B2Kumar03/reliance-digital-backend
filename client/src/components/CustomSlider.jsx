import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://www.reliancedigital.in/medias/Oppo-K12x-D-240802.jpg?context=bWFzdGVyfGltYWdlc3wxNDk1NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk2L2g0Mi8xMDE3OTk2NjkyNjg3OC5qcGd8YzI1MjUxOGE1N2FlZDczNTQ0MzY0MTdmZjhjMmU0YmM1OWEwMzNkMTg0YTJlMTkxZGRhMzhiODIyMDA5MmU2Zg",
  "https://www.reliancedigital.in/medias/Apple-AirPods-Pro-Banner-D-rev-2-1-.jpg?context=bWFzdGVyfGltYWdlc3w3OTA4OXxpbWFnZS9qcGVnfGltYWdlcy9oNzkvaGM0LzEwMTc4NjU3NDE5Mjk0LmpwZ3xmZTI5ODRhOTM5NTI2MjFjMjA3NjFmY2U5ZjlhMzlkNDIxZDk1ODNjNjI2MDM4ZjA2ODdhNmQ2YzlkZWFhOWRk",
  "https://www.reliancedigital.in/medias/TV-Banner-D-hp-240802.jpg?context=bWFzdGVyfGltYWdlc3wxNzQyOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGE4L2g4Ni8xMDE3OTk3MjEzNjk5MC5qcGd8NDFiYTQ3MDNhMGMxODJhZTk1NDJlMzlkYmJmMTQzMGQ4ZmY5YWNmZDMxODVhYjQzODdkMzk1MGExMTNhZmMwMA",
  "https://www.reliancedigital.in/medias/Apple-Watch-Series-9-Banner-D-hp-240802.jpg?context=bWFzdGVyfGltYWdlc3wxODU5MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ0L2hiOC8xMDE3OTk3MjI2ODA2Mi5qcGd8M2NjZjM4NDMyMGVkMWI5ODIzNDllZmNmOTQ3NGQxOTRlZGU2YTY4ZTVkODZjZmJmY2E3MzA3ZTk3YWIxMDkyMg",
  "https://www.reliancedigital.in/medias/Microwaves-Banner-D-hp-240802.jpg?context=bWFzdGVyfGltYWdlc3wxODk5ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDczL2hiNS8xMDE3OTk3MjM5OTEzNC5qcGd8MzY3NzMzOTRkMTBlMDljZjYxMjlkNzcxMDQ3MDc3NTc3MjJmMTE1ZTBjZDJmMzUyMzMwYjNkYmMwOWE2MTFjNw",
  "https://www.reliancedigital.in/medias/Best-Selling-Laptop-Banner-D-hp-240802.jpg?context=bWFzdGVyfGltYWdlc3wyMDAzMzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2hjNS8xMDE3OTk3MjUzMDIwNi5qcGd8ZWJhOGE2MmJhZjA5MmE5YmVkNWIyNTAxM2NmY2VjNTMyNWE1MzM2ZjExOWRmZTdhNzg4OWZjN2ZjOTE2ZjYzMg",
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      <FaArrowLeft className="p-2" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      <FaArrowRight className=" rounded-full p-2" />
    </div>
  );
};

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul
          style={{ display: "flex", justifyContent: "center", margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-full mt-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
