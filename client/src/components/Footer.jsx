import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">PRODUCT CATEGORIES</h3>
            <ul>
              <li>Smartphones</li>
              <li>Laptops</li>
              <li>DSLR Cameras</li>
              <li>Televisions</li>
              <li>Air Conditioners</li>
              <li>Refrigerators</li>
              <li>Kitchen Appliances</li>
              <li>Accessories</li>
              <li>Personal Care & Grooming</li>
              <li>Smartwatches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SITE INFO</h3>
            <ul>
              <li>About Reliance Digital</li>
              <li>resQ Services</li>
              <li>Locate nearest resQ service center</li>
              <li>Locate nearest My Jio Store</li>
              <li>Site Map</li>
              <li>Gift Cards</li>
              <li>Corporate Enquires</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">RESOURCE CENTRE</h3>
            <ul>
              <li>Product Reviews</li>
              <li>Buying Guides</li>
              <li>How Tos</li>
              <li>Featured Stories</li>
              <li>Events & Happenings</li>
              <li>Nearest Store</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">POLICIES</h3>
            <ul>
              <li>Terms of Use</li>
              <li>FAQs</li>
              <li>Cancellation and Return Policy</li>
              <li>Pricing and Payments Policy</li>
              <li>Shipping and Delivery Policy</li>
              <li>Privacy Policy</li>
              <li>E-waste Recycling Policy</li>
              <li>EMI and Additional Cashback T&C</li>
              <li>RelianceOne Loyalty Program T&C</li>
              <li>Caution Notice</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center flex-wrap">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/RelianceDigital/" className="text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/reliancedigital" className="text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com/user/reliancedigital" className="text-white">
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 ">
            <a href="https://play.google.com/store/apps/details?id=com.ril.ajio" className="flex items-center text-white bg-black border p-2 rounded">
              <FaGooglePlay size={24} className="mr-2" />
              Get it on Google Play
            </a>
            <a href="https://apps.apple.com/in/app/reliance-digital/id962397667" className="flex items-center text-white  bg-black border rounded p-2">
              <FaApple size={24} className="mr-2" />
              Download on the App Store
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs md:text-sm">
          <p className="mb-2">
            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes.
            Product colours & images are only for illustration and they may not exactly match with the actual product. Product
            specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content,
            these are provided as is, without warranty of any kind.
          </p>
          <p className="mb-2">&copy; 2024 Reliance Digital. All Rights Reserved.</p>
          <a href="https://www.reliancedigital.in/content/caution-notice" className="underline text-white">Caution Notice</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
