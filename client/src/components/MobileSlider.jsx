import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const mobileData = [
  {
    img: "https://www.reliancedigital.in/medias/Vivo-Y28e-5G-494422066-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjY0MnxpbWFnZS9qcGVnfGltYWdlcy9oNzkvaGFkLzEwMTc1MDI2MTAyMzAyLmpwZ3w3MTljYjIwYmNjYzBiYWEzZTY5N2RmMjg3MjI3OTU5NDg2OGE3YWQ1ZjM4MDZmNmMyMDNjZGFiMGFjNjJkM2Fj",
    name: "Vivo Y28e 5G 8GB RAM",
    price: "49,999",
    color: "Black",
    category: "Mobile",
    available: true,
    rating: 4.5
  },
  {
    img: "https://www.reliancedigital.in/medias/Vivo-T3X-Celestial-Green-Mobile-Phone-494353189-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTUwN3xpbWFnZS9qcGVnfGltYWdlcy9oNTMvaGZlLzEwMTM0ODM2NTQzNTE4LmpwZ3wzZTk2NDNjZWM3Y2Q2NzEyZjkyMTM4ZWNhM2JiNGJmZDA2ZjE2OTQ3MTEzMjM4MmFmYTQ2MzgxNmVkNDcwMWFm",
    name: "Vivo T3X Celestial Green 6GB RAM",
    price: "39,999",
    color: "Celestial Green",
    category: "Mobile",
    available: true,
    rating: 4.3
  },
  {
    img: "https://www.reliancedigital.in/medias/SamsungA15-Smartphone-494351802-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTMzM3xpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDBkLzEwMTI4ODI4MTM3NTAyLmpwZ3xkNDdlMjkxOTExYzc0NzZmMDE5MTQ2YTVhODZmNzk0OWEzNDFmNGRlYWI5OTUyMjJjMzg5ZThhMDU1ZWI0MmY3",
    name: "Samsung A15 4GB RAM",
    price: "44,999",
    color: "White",
    category: "Mobile",
    available: true,
    rating: 4.2
  },
  {
    img: "https://www.reliancedigital.in/medias/realme-C67-5G-Sunny-Oasis-494351831-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTY0M3xpbWFnZS9qcGVnfGltYWdlcy9oYWQvaGI5LzEwMTA5MDc1ODQ5MjQ2LmpwZ3w5NTQwNTQxMjNlOThiMzQ0YjAyMzc1ZjkxYzUxMTYyZmRiNGY4OTA3MzBlZDQ5YjQ4YTI1MzkxYmFjZGRkYWEy",
    name: "Realme C67 5G 6GB RAM",
    price: "39,999",
    color: "Sunny Oasis",
    category: "Mobile",
    available: true,
    rating: 4.4
  },
  {
    img: "https://www.reliancedigital.in/medias/Vivo-V30e-Silk-Blue-Mobile-Phone-494353406-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ5MHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDYzLzEwMTQwMTA4MDk1NTE4LmpwZ3w0MWE0MzVlYmMyZjQ5MmU1YWE0OGUzZDgwZWY4MzMwMWVlMjIxNmUyMmE4YzVmNzU2NjVlNmYzYjdlMDMyZDU0",
    name: "Vivo V30e Silk Blue 8GB RAM",
    price: "49,999",
    color: "Silk Blue",
    category: "Mobile",
    available: true,
    rating: 4.6
  },
  {
    img: "https://www.reliancedigital.in/medias/Samsung-Galaxy-Dark-Blue-Mobile-Phone-494353241-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NTQ4N3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDZmLzEwMTM1NDA0NTQ0MDMwLmpwZ3w4N2ZkNzI0MWUwOWZkOWUzYWNjMGRlYzJjMzlkM2NkNmVlMTYyYmY1NjM4YjQ1ODQ4ZWI3NjQ5ZmEwMTM0YmE2",
    name: "Samsung Galaxy Dark Blue 8GB RAM",
    price: "54,999",
    color: "Dark Blue",
    category: "Mobile",
    available: true,
    rating: 4.7
  },
  {
    img: "https://www.reliancedigital.in/medias/Realme-12x-5G-494353031-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODUxMnxpbWFnZS9qcGVnfGltYWdlcy9oYjcvaDQwLzEwMTczMTYyMjkxMjMwLmpwZ3wwODQ0MzVjYzg3ZjczM2FjMTY5ZDA4OTdlZmU1OTYxMzNjN2Q3YjIyZjI2ZjEyYjE0YjhlMDQ1MDE5NDNhOGNk",
    name: "Realme 12X 5G 6GB RAM",
    price: "49,999",
    color: "Red",
    category: "Mobile",
    available: true,
    rating: 4.5
  },
  {
    img: "https://www.reliancedigital.in/medias/Vivo-Y28s-5G-494421914-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjcwN3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaGFjLzEwMTY4ODMzMjQ1MjE0LmpwZ3wwMjQzMjI5NDM4NjRkNDRmMmJhNzZmMjRjYTBhNzg5YmMzYzQyZmM0NWI1MjFlMzBmZjk2YjI1MmNjZjRjYTAy",
    name: "Vivo Y28s 5G 8GB RAM",
    price: "49,999",
    color: "Black",
    category: "Mobile",
    available: true,
    rating: 4.6
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-white rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-white rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const settings = {
 
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const MobileSlider = () => {
  return (
    <div className="container max-w-[95%] mx-auto bg-white mb-5">
        <p className='pl-2 py-5'>Smartphone Bonanza | 10% upto Rs.3000 HDFC Instant Discount <span>View all</span></p>
      <Slider {...settings}>
        {mobileData.map((mobile, index) => (
          <div key={index} className="px-4 group/item">
            <div className="bg-white   p-4 h-full flex flex-col">
              <div className="relative overflow-hidden group">
                <img
                  src={mobile.img}
                  alt={mobile.name}
                  className="w-1/2 rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold group-hover/item:text-[red] duration-100">{mobile.name}</h3>
                <p className="text-gray-500">{mobile.color}</p>
                <p className="text-gray-500">{mobile.category}</p>
                <p className="text-gray-500">Available: {mobile.available ? "Yes" : "No"}</p>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <p className="text-gray-500">{mobile.rating}</p>
                </div>
                <div className="flex items-center mt-auto">
                  <FaRupeeSign className="text-gray-900 mr-1" />
                  <p className="text-gray-900 font-bold">{mobile.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileSlider;
