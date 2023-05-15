import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import IconsData from "@/data/IconsData";

const SidebarItem = ({ item, currentPage, sidebarCollapsed, activeTab }) => {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleSubItemCollapse = () => {
    setCollapsed(!collapsed);
  };


  return (
    < >
      <div
      key={item.id}
        className={`flex items-center justify-between px-2 py-3 ${
          sidebarCollapsed ? "w-16" : null
        } text-gray-700 ${activeTab ? "bg-gray-200" : ""}`}
      >
        <Link href={item.path}>
          <div className="flex gap-2 items-center">
            <IconsData iconName={item.icon} />

            {!sidebarCollapsed ? <div>{item.title}</div> : null}
          </div>
        </Link>

        {item.subItems?.length > 0 && (
          <button className="focus:outline-none" onClick={handleSubItemCollapse}>
            {collapsed ? <FiChevronDown className="w-6 h-6" /> : <FiChevronUp className="w-6 h-6" />}
          </button>
        )}
      </div>

      {item?.subItems?.length > 0 && (
        <div
          className={`pl-8 pt-2 transition-all duration-300 ease-in-out ${
            collapsed ? "h-0 opacity-0 invisible" : "opacity-100"
          }`}
        >
          {item.subItems?.map((subItem) => (
            <SidebarItem key={subItem.id} item={subItem} currentPage={currentPage} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
