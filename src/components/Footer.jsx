import React from "react";
import logo from "../assets/topupskuyy.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#25394d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div>
                  <a href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span>
                        <img
                          src={logo}
                          alt="Topupskuyy Logo"
                          width={64}
                          height={64}
                          className="w-16"
                        />
                      </span>
                      <span className="text-white">Topupskuyy</span>
                    </div>
                  </a>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-gray-400"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      {/* ... Instagram SVG path ... */}
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 sm:col-span-2 sm:mt-0 lg:col-span-2">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Site Map
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Home
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Contact Us
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/pricing"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          +6282335674177
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          topupskuyy.info@gmail.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="/casestudies"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Kp. Rawa Bebek no.19 RT.001 RW.011 Kelurahan Kota
                          Baru, Kecamatan Bekasi Barat, Kode Pos 17133
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white">
                © 2024 . All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
