import React from "react";

const SidebarItem = ({ path, children }) => {
    return (
        <a href={path} className="flex items-center p-1 text-slate-100 bg-dbrown hover:bg-clay rounded">
            <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
            <span className="mr-5">{children}</span>
        </a>
    )
};

export default SidebarItem;