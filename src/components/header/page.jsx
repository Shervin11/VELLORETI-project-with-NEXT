import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center md:flex-row flex-col justify-between">
      <div className="flex items-center gap-[20px] md:gap-[50px]">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-[15px]">
          <Link href={'/products'}>
            <li>PRODUCTS</li>
          </Link>
          <Link href={'/city'}>
            <li>CITY</li>
          </Link>
          <Link href={"/about"}>
            <li>ABOUT US</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-[40px]">
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="tj">TJ</option>
        </select>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Header;
