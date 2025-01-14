import * as React from 'react'
import Layout from '../components/layout/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Social from '../components/common/Social'
import { Seo } from '../components/common/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <section className=" h-full bg-background_color">
        <div className="items-center pt-12 px-8 h-full w-full lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <StaticImage
                  className='w-32 h-32'
                  alt='GW2Calculator icon'
                  src='../images/logo.png'
                />
              </div>
              <p className="sm:mt-8 mt-3 sm:px-44 text-text_color text-4xl sm:text-6xl font-semibold tracking-tighter">
                Guild Wars 2 <span className="underline leading-8 underline-offset-8	decoration-8 decoration-red">Calculator</span>.
              </p>
              <p className="mt-4 sm:px-32 text-text_color sm:text-xl text-sm font-semibold tracking-tighter">
                by @C0WAL
              </p>
              <div className="mt-2 flex justify-center items-center border-2 border-border_color rounded-xl shadow-md ">
                <div className="flex rounded-xl bg-background_color text-text_color flex-row justify-center items-center">
                  <div className="p-6">
                    <p className="text-text_color sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
                      <span className="font-semibold">Welcome to GW2Calculator. </span>
                      This is a small tool I made to help with
                      <span className="font-semibold"> Guild Wars 2 </span>
                      . If you spot any bugs or have ideas for improvements, feel free to reach out via: <br></br>
                    </p>
                    <div className="space-x-4 flex justify-center">
                      <Social icon={faDiscord} text="@C0WAL" />
                      <Social icon={faEnvelope} text="zidicck.6235" />
                      <Social icon={faGithub} text="C0WAL" url="https://github.com/C0WAL/GW2Calc" />
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

export const Head = () => (
  <Seo />
)

export default IndexPage