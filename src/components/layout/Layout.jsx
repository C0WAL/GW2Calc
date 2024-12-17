import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SidebarItem from '../common/SidebarItem'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="bg-dbrown px-6 py-3 flex justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-4">
            <StaticImage
              alt="GW2Calc logo, dragon on a for way splitted square"
              src="../../images/logo.png"
              width={33}
              height={33}
              objectFit="contain"
            />
            <span className="text-xl font-bold text-slate-100">GW2 Calculator</span>
          </a>
        </div>
        <div className="space-x-4">
          <a href="https://github.com/C0WAL/GW2Calc" target="_blank" rel="noopener noreferrer">
            <StaticImage
              alt="Github invertocat logo"
              src="../../images/github-mark-white.png"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
        </div>
      </nav>
      <div className="flex jk-h-full mt-4">
        <aside className="w-1/7 jk-nav-h ml-4 rounded-md bg-sand flex flex-col justify-between shadow-md">
          <div className="p-6">
            <nav className="space-y-2 ">
              <SidebarItem path="/skirmish">WvW Skirmish chest</SidebarItem>
              <SidebarItem path="/rewardtrack">WvW Reward track</SidebarItem>
            </nav>
          </div>
        </aside>
        <div className="w-5/6 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout