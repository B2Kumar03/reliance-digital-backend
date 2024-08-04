import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaMicrophone,
  FaComments,
  FaSitemap,
  FaBook,
  FaQrcode,
  FaPhone,
  FaMapMarkerAlt,
  FaPlug,
  FaHeartbeat,
  FaBlender,
  FaCamera,
  FaDesktop,
  FaTools,
  FaHeadphones,
  FaTv,
  FaMobileAlt,
  FaChevronDown,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

const suggestionsData = [
  "Smartphones",
  "Laptops",
  "Televisions",
  "Headphones",
  "Home Appliances",
  "Cameras",
  "Kitchen Appliances",
  "Personal Care",
  "Accessories",
  // Add more suggestions as needed
];

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cart, setCart] = useState([1]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginHovered, setLoginHovered] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = suggestionsData.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleCartMouseEnter = () => {
    if (cart.length > 0) {
      setCartOpen(true);
    }
  };

  const handleCartMouseLeave = () => {
    setCartOpen(false);
  };

  const handleLoginMouseEnter = () => {
    setLoginHovered(true);
  };

  const handleLoginMouseLeave = () => {
    setLoginHovered(false);
  };

  return (
    <>
      <nav className="bg-red-600 p-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto md:flex-1">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              className="text-white focus:outline-none hover:bg-transparent bg-transparent md:hidden"
              onClick={toggleDrawer}
            >
              <FaBars size={24} />
            </button>
            <img
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="Reliance Digital logo"
              className="h-8 md:h-12"
            />
          </div>
          <button className="text-white focus:outline-none hover:bg-transparent bg-transparent md:hidden">
            <FaShoppingCart size={24} />
          </button>
        </div>
        <div className="w-full md:hidden my-2">
          <div className="relative flex-1 mx-2">
            <input
              type="text"
              placeholder="Search for products and brands"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 pr-10 rounded-full text-black placeholder-gray-500"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            <FaMicrophone className="absolute right-3 top-2.5 text-gray-500" />
            {suggestions.length > 0 && (
              <ul className="absolute z-50 w-full bg-white border rounded-md mt-1">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products and brands"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 pr-10 rounded-full text-black placeholder-gray-500"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            <FaMicrophone className="absolute right-3 top-2.5 text-gray-500" />
            {suggestions.length > 0 && (
              <ul className="absolute z-50 w-full bg-white border rounded-md mt-1">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 pr-4">
          <div
            className="relative"
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
          >
            <button className="flex items-center text-white bg-transparent border-none outline-none hover:bg-transparent hover:text-white">
              <FaShoppingCart className="mr-1" />
              Cart
            </button>
            {isCartOpen && cart.length > 0 && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-1">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Item {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="border-r border-gray-300 h-6"></div>
          <div
            className="relative"
            onMouseEnter={handleLoginMouseEnter}
            onMouseLeave={handleLoginMouseLeave}
          >
            <button className="flex items-center text-white bg-transparent border-none outline-none hover:bg-transparent hover:text-white">
              <FaUser className="mr-1" />
              Login
            </button>
            {isLoginHovered && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My Profile
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My Orders
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My Address
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My Wishlist
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    ROne Loyalty Points
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My Credits
                  </li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleDrawer}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between bg-red-600 text-white">
              <span className="text-lg font-bold">
                <img
                  src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                  alt="Reliance Digital logo"
                  className="h-12"
                />
              </span>
              <button
                className="focus:outline-none hover:bg-transparent bg-transparent"
                onClick={toggleDrawer}
              >
                <MdClose size={24} />
              </button>
            </div>
            <ul className="py-2">
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Smartphones</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Laptops</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Televisions</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Headphones</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Home Appliances</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Cameras</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Kitchen Appliances</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Personal Care</span>
                  <FaChevronDown />
                </button>
              </li>
              <li className="border-b border-gray-300">
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <span>Accessories</span>
                  <FaChevronDown />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar