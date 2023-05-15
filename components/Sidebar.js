
import React from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
  FiArrowLeft,
  FiArrowRight
} from "react-icons/fi";

import { useRouter } from 'next/router';


import Link from "next/link";
import IconsData from "@/data/IconsData";
import SidebarItem from "./SidebarItem";

const Sidebar = ({menuLinks}) => {

  const currentPage = useRouter()
  // const menuLinks = [{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e4b"
  //   },
  //   "id": 57,
  //   "title": "Quick Start Guide",
  //   "icon": "Fikey",
  //   "path": "/guide",
  //   "subItems": [],
  //   "collapsed": false
  // },{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e50"
  //   },
  //   "id": 4,
  //   "title": "Settings",
  //   "icon": "FiSettings",
  //   "path": "/settings",
  //   "subItems": [
  //     {
  //       "id": 17,
  //       "title": "User Details 1",
  //       "path": "/users/1",
  //       "collapsed": false,
  //       "icon": "UserIcon",
  //       "subItems": [
  // {
  //       "id": 17,
  //       "title": "User Details 2",
  //       "path": "/users/1",
  //       "collapsed": false,
  //       "icon": "UserIcon",
  //       "subItems": [
  
  // {
  //       "id": 17,
  //       "title": "User Details 3",
  //       "path": "/users/1",
  //       "collapsed": false,
  //       "icon": "UserIcon",
  //       "subItems": [],
  
  //     }
  
  // ],
  
  //     }
  // ],
  
  //     }
  //   ],
  //   "collapsed": true
  // },{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e4d"
  //   },
  //   "id": 55627,
  //   "title": "Custom Dashboard",
  //   "icon": "FiTool",
  //   "path": "/customdashboard",
  //   "subItems": [],
  //   "collapsed": false
  // },{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e4e"
  //   },
  //   "id": 2,
  //   "title": "Locations",
  //   "icon": "FiHome",
  //   "path": "/posts",
  //   "subItems": [
  //     {
  //       "id": 12,
  //       "icon": "FiServer",
  //       "title": "Manage Work",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //       "subItems": [],
  
  //     },
  //     {
  //       "id": 13,
  //       "icon": "FiGrid",
  //       "title": "Assets",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     },
  //     {
  //       "id": 14,
  //       "icon": "FiTool",
  //       "title": "PMs",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     },
  //     {
  //       "id": 15,
  //       "icon": "GiGears",
  //       "title": "Parts",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     },
  //     {
  //       "id": 16,
  //       "icon": "FiUsers",
  //       "title": "Teams",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     },
  //     {
  //       "id": 17,
  //       "icon": "FiCreditCard",
  //       "title": "Vendors",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     },
  //     {
  //       "id": 18,
  //       "icon": "FiDollarSign",
  //       "title": "Purchasing",
  //       "path": "/posts/1",
  //       "collapsed": false,
  //   "subItems": [],
  
  //     }
  //   ],
  //   "collapsed": true
  // },{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e4c"
  //   },
  //   "id": 56,
  //   "title": "Global Dashboard",
  //   "icon": "FiGlobe",
  //   "path": "/dashboard",
  //   "subItems": [],
  //   "collapsed": false
  // },{
  //   "_id": {
  //     "$oid": "64480d1aa1fffa46e9d67e4f"
  //   },
  //   "id": 3,
  //   "title": "Setup Work Requests",
  //   "icon": "WarningIcon",
  //   "path": "/requests",
  //   "subItems": [],
  //   "collapsed": false
  // }]


  const [collapsed, setCollapsed] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState(menuLinks)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // const handleSubItemCollapse = (itemIndex, subIndex) => {
  //   const newMenuItems = [...menuItems];
  //   newMenuItems[itemIndex].subItems[subIndex].collapsed = !newMenuItems[itemIndex].subItems[subIndex].collapsed;
  //   setMenuItems(newMenuItems);
  // };




  return (
    <nav
      className={`${collapsed ? "w-16" : "w-64"
        } bg-white transition-all duration-300 ease-in-out h-screen border-r border-gray-200`}
    >
      <div className="relative">
        <div className="flex flex-col  gap-16 h-full ">
          <div className="flex  flex-col items-center justify-between p-4 border-b  border-gray-200">

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



          

              {menuItems?.map((item) => (

              

                <SidebarItem key={item.id} item={item} currentPage={currentPage} sidebarCollapsed={collapsed} 
                activeTab={item.path === currentPage.pathname ? "bg-gray-200" : ""}
                
                />


              ))}
         





          </div>


        </div>

        <div className="absolute top-5 -right-4">
          <div onClick={handleCollapse} className="cursor-pointer rounded-full w-7 h-7 bg-white hover:bg-gray-300 flex items-center ">

            {collapsed ? <FiArrowRight className="w-6 h-6 text-black" /> : (<FiArrowLeft className="w-6 h-6 text-black" />)}

          </div>

        </div>

      </div>


    </nav>
  );
};

export default Sidebar;

