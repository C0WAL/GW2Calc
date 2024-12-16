import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="bg-[#322C2B] px-6 py-3 flex justify-between">
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
        <aside className="w-1/7 jk-nav-h ml-4 rounded-md bg-[#E4C59E] flex flex-col justify-between shadow-md">
          <div className="p-6">
            <nav className="space-y-2 ">
              <a href="/skirmish" className="flex items-center p-1 text-slate-100 bg-[#322C2B] hover:bg-[#AF8260] rounded">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <span className="mr-5">WvW Skirmish chest</span>
              </a>
              <a href="/rewardtrack" className="flex items-center p-1 text-slate-100 bg-[#322C2B] hover:bg-[#AF8260] rounded">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <span className="mr-5">WvW Reward track</span>
              </a>
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