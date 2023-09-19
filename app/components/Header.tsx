"use client";

import {
  BehanceSquareOutlined,
  DownCircleOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState,useEffect } from "react";

const links = ["Services", "Blog", "About"];

const styles = {
  hover_Effect: "hover:text-[#F68519] my-8 text-[30px]",
};

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
 
  return (
    <nav className="bg-gray-900 h-24 p-4 w-full shadow-xl">
      {/* Desktop Menu */}
      <div className=" flex justify-between items-center h-full px-4 w-full">
        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
        <p className="text-yellow-50 mr-auto ml-4 font-semibold text-2xl ">
          EduHub
        </p>

        <ul className="sm:flex gap-6 list-none cursor-pointer hidden">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={link.toLowerCase()}
                className="text-gray-300 hover:text-blue-500 hover:font-semibold active:text-purple-500 focus:text-green-00"
              >
                {link}
              </Link>
            </li>
          ))}
          <li
            className="text-gray-900 font-bold border border-[#F68519] px-4 py-1 rounded-full bg-[#F68519]
           hover:bg-gray-900 hover:text-[#F68519] hover:text-xl ease-in-out duration-300"
          >
            Sign In
          </li>
        </ul>

        {/* Mobile Menu */}
        <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-[#F68519]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[80%] sm:hidden h-screen bg-[#ecf0f3] ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
          // className="fixed top-0 left-0 w-[80%] sm:hidden h-screen bg-[#ecf0f3] ease-in-out duration-500"
        >
          <div onClick={toggleMenu} className="w-full flex items-center justify-end py-3 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-[#F68519]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Mobile Menu Links */}
          <ul>
            {links.map((link) => (
              <li
                key={link}
                className="pl-4 py-4 text-xl font-bold font-cursive 
                hover:text-[#F68519]"
                onClick={() => setMenuOpen(false)}
              >
                <Link href={link.toLowerCase()}>{link}</Link>
              </li>
            ))}
            <li
              className="w-[60%] text-center text-gray-900 font-bold border px-4 py-3 rounded-full bg-[#F68519]
           hover:bg-gray-900 hover:text-[#F68519] hover:text-xl ease-in-out duration-300 ml-3"
            >
              Sign In
            </li>
          </ul>
          <div className="flex justify-evenly flex-row">
            <FacebookOutlined className={styles.hover_Effect} />
            <InstagramOutlined className={styles.hover_Effect} />
            <WhatsAppOutlined className={styles.hover_Effect} />
            <GithubOutlined className={styles.hover_Effect} />
            <BehanceSquareOutlined className={styles.hover_Effect} />
          </div>
          {/* Logo */}
          <div className="flex px-4 py-16 hover:cursor-pointer justify-center items-center flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-20 text-[#000000]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <p className="text-[#F68519] mr-auto ml-4 font-semibold text-4xl ">
              EduHub
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
