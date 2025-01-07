import React from "react";

const SidebarItem = ({ path, icon: Icon, children }) => {
    return (
        <a href={path} className="flex items-center p-1 text-light_background hover:bg-light_selected rounded">
            <span className="mr-3"><Icon/></span>
            <span className="mr-5">{children}</span>
        </a>
    )
};

export default SidebarItem;