import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
  return (
    <Layout>
      <section className=" h-full bg-white">
        <div className="items-center pt-12 px-8 h-full w-full lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <StaticImage
                  className='w-32 h-32'
                  art='GW2Calculator icon'
                  src='../images/logo.png'
                />
              </div>
              <p className="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                Guild Wars 2 <span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#ba1616]">Calculator</span>.
              </p>
              <p className="mt-4 sm:px-32 text-[#10172A] sm:text-xl text-sm font-semibold tracking-tighter">
                by @C0WAL
              </p>
              <div className="flex justify-center items-center">
                <div>
                  <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex-row">
                    <div className="p-6">
                      <p className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
                        <span className="font-semibold">Hello there! </span>
                        Welcome to GW2Calculator. This is a small tool I made to help with
                        <span className="font-semibold"> Guild Wars 2 </span>
                        calculations. If you spot any bugs or have ideas for improvements, I'd love to hear from you! Feel free to reach out via: <br></br>
                        <FontAwesomeIcon icon={faDiscord} className="text-2xl" /> <span className="font-semibold">@C0WAL </span>
                        <FontAwesomeIcon icon={faEnvelope} className='text-2xl'/> <span className="font-semibold">zidicck.6235 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <title>GW2Calc</title>

export default IndexPage