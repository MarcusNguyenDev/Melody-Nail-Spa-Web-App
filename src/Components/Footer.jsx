import {React} from 'react'
import fbIcon from '../misc/facebook.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of Facebook, we will respond as soon as possible.
            </h5>
            <div className="mt-6 items-center justify-center align-center content-center flex">
              <Link to={""}>
                <img className='' src={fbIcon} alt="" onClick={()=>{window.location.href='https://www.facebook.com/melodynailsbrassall'}}/>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "} Melody Nail-Spa Web App by {"Marcus Nguyen"}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
