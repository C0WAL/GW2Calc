import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SidebarItem from '../common/SidebarItem'
import { Icons } from '../../data/SvgIcons'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="bg-light_primary px-6 py-3 flex justify-between">
        <div className="flex items-center space-x-4 min-w-64">
          <a href="/" className="flex items-center space-x-4">
            <StaticImage
              alt="GW2Calc logo, dragon on a for way splitted square"
              src="../../images/logo.png"
              width={33}
              height={33}
              objectFit="contain"
            />
            <span className="text-xl font-bold text-light_background">GW2 Calculator</span>
          </a>
        </div>
        <div className="flex space-x-2">
          <SidebarItem path="/skirmish" icon={Icons.Chest}>WvW Skirmish chest</SidebarItem>
          <SidebarItem path="/rewardtrack" icon={Icons.WvW}>WvW Reward track</SidebarItem>
        </div>
        <div className="flex space-x-4 min-w-64 justify-end">
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
      <div className="flex flex-col flex-grow jk-nav-h justify-center items-center">
        <div className="w-5/6 h-full">
          {children}
        </div>
        <hr className="my-6 border-light_selected w-5/6" />
        <div className="flex justify-center items-center mb-4">
          <span className="text-light_primary font-semibold text-sm py-1">
            This unofficial site includes art and other assets that are © 2015 ArenaNet, Inc. All rights reserved.
            All other trademarks are the property of their respective owners.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Layout