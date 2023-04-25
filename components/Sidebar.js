
import React from "react";
import {

  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,

} from "react-icons/fi";

import Image from "next/image";

import Link from "next/link";
import IconsData from "@/data/IconsData";

const Sidebar = ({ menuLinks }) => {
  const currentPage = '/Users' //will have to work on current page

  const [collapsed, setCollapsed] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState(menuLinks)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);


  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setSidebarCollapsed(!sidebarCollapsed); // toggle the state variable

  };

  const handleSubItemCollapse = (itemIndex, subIndex) => {
    const newMenuItems = [...menuItems];
    newMenuItems[itemIndex].subItems[subIndex].collapsed = !newMenuItems[itemIndex].subItems[subIndex].collapsed;
    setMenuItems(newMenuItems);
  };


  return (
    <nav
      className={`${collapsed ? "w-16" : "w-64"
        } bg-white transition-all duration-300 ease-in-out h-screen border-r border-gray-200`}
    >

      <div className="flex flex-col h-full">
        <div className="flex  flex-col items-center justify-between p-4 border-b border-gray-200">

          <div className="flex items-center">
            <div onClick={handleCollapse} className="text-2xl cursor-pointer font-semibold text-gray-800">
              {collapsed ? "L" : "Logo"}
            </div>
            <div className="ml-2">
              <button
                className="focus:outline-none md:hidden"
                onClick={handleCollapse}
              >
                {collapsed ? (
                  <FiChevronRight className="w-6 h-6" />
                ) : (
                  <FiChevronLeft className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          <div className="flex-1 mt-6 overflow-hiddin">
            {menuItems?.map((item, index) => (
              <div key={item.id}>
                <div
                  className={`flex items-center justify-between px-4 py-3 text-gray-700 ${item.path === currentPage ? "bg-gray-200" : ""
                    }`}
                >
                  <Link href={item.path}>
                    <div className="flex gap-2 items-center">

                  
                     <IconsData iconName={item.icon} />


                      {
                        !collapsed ? (<div>{item.title}</div>) : null
                      }

                    </div>
                  </Link>

                  {item.subItems.length > 0 && (
                    <button
                      className="focus:outline-none"
                      onClick={() =>
                        handleSubItemCollapse(index, 0)
                      }
                    >
                      {item.subItems[0].collapsed ? (
                        <FiChevronDown className="w-6 h-6" />
                      ) : (
                        <FiChevronUp className="w-6 h-6" />
                      )}
                    </button>
                  )}

                </div>
                {item.subItems.length > 0 && (
                  <div
                    className={`pl-8 pt-2 transition-all duration-300 ease-in-out ${collapsed ? "h-0 opacity-0 invisible" : item.subItems[0].collapsed ? "opacity-100" : "h-0 opacity-0"
                      }`}
                    style={{ display: collapsed ? "none" : item.subItems[0].collapsed ? "block" : "none" }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subItem.id}
                        className={`py-2 text-gray-600 ${subItem.path === currentPage ? "bg-gray-200" : ""
                          }`}
                      >
                        <div className="flex ">
                        
                          <IconsData iconName={subItem.icon} />


                          <Link href={subItem.path}>{subItem.title}</Link>

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

