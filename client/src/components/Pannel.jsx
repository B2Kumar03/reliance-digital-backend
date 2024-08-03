import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Panel = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      title: 'MOBILES & TABLETS',
      subItems: []
    },
    {
      title: 'TELEVISIONS',
      subItems: [
        {
          title: 'Televisions',
          items: ['Smart TVs', '32 Inch TVs', '43 Inch TVs', '55 Inch TVs', 'Android TVs']
        },
        {
          title: 'Gaming',
          items: ['Gaming Consoles', 'Gaming Accessories', 'Gaming Titles', 'Gaming Controllers']
        },
        {
          title: 'Reconnect Disney | Marvel Audio Collection',
          items: []
        },
        {
          title: 'TV & Audio Accessories',
          items: ['Virtual Reality Headsets', 'Stabilizers & Surge Protectors']
        },
        {
          title: 'Projectors',
          items: []
        },
        {
          title: 'Streaming Devices',
          items: []
        }
      ]
    },
    {
      title: 'AUDIO',
      subItems: []
    },
    {
      title: 'HOME APPLIANCES',
      subItems: []
    },
    {
      title: 'COMPUTERS',
      subItems: []
    },
    {
      title: 'CAMERAS',
      subItems: []
    },
    {
      title: 'KITCHEN APPLIANCES',
      subItems: []
    },
    {
      title: 'PERSONAL CARE',
      subItems: []
    },
    {
      title: 'ACCESSORIES',
      subItems: []
    }
  ];

  return (
    <div className="relative bg-blue-900 hidden lg:block">
      <nav className="flex justify-center text-white">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex outline-none bg-transparent text-[10px] lg:text-[12px] items-center hover:bg-red-600 rounded-none transition duration-300 px-4">
              {menuItem.title}
              {menuItem.subItems.length > -1 && (
                <span className="ml-2">
                  {hoveredItem === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </button>
            {hoveredItem === index && menuItem.subItems.length > 0 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-blue-900 shadow-lg z-10 p-4 w-[90%]">
                <div className="grid grid-cols-4 gap-6">
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-white font-bold mb-2">{subItem.title}</h3>
                      <ul className="text-gray-300">
                        {subItem.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Panel;
