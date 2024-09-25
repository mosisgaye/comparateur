import React from 'react';
import { FaWifi, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import Link from 'next/link';
import '@/app/globals.css'

const Heromobile = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-white mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Comparez les box internet, forfaits mobile, <br />
          
          </h1>
          <p className="text-lg font-light">Je souhaite...</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box Internet */}
          <Link href="/box-internet" className="group">
            <div className="card">
              <FaWifi className="text-5xl text-gray-700 mb-4 transition group-hover:text-pink-500" />
              <p className="text-gray-800 text-xl font-semibold">une box internet</p>
              <div className="mt-6 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl transition transform hover:rotate-90">
                <span>➡️</span>
              </div>
            </div>
          </Link>

          {/* Forfait Mobile */}
          <Link href="/forfaits-mobile" className="group">
            <div className="card">
              <FaMobileAlt className="text-5xl text-gray-700 mb-4 transition group-hover:text-pink-500" />
              <p className="text-gray-800 text-xl font-semibold">un forfait mobile</p>
              <div className="mt-6 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl transition transform hover:rotate-90">
                <span>➡️</span>
              </div>
            </div>
          </Link>
      
        </div>
      </div>
    </div>
  );
};

export default Heromobile;
