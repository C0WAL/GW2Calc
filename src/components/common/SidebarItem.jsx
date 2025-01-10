import React from "react";

const SidebarItem = ({ path, icon: Icon, children }) => {
    return (
        <a href={path} className="flex items-center p-1 text-nav_text_color hover:bg-selected_color rounded">
            <span className="font-sans mr-3"><Icon/></span>
            <span className="font-sans mr-5">{children}</span>
        </a>
    )
};

export default SidebarItem;