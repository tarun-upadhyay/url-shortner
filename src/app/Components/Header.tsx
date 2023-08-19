"use client";
import { Logo } from "@/utils/Logo";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = () => {
        if (window.scrollY > 80) {
          setHandleShow(true);
        } else {
          setHandleShow(false);
        }
      };
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  }, []);

  return (
    <header
      className={`px-8 md:px-40 md:py-2 py-6 bg-white-800 sticky top-0 z-[100] bg-neutral-50 w-full ${
        handleShow ? "shadow-sm" : ""
      }`}
    >
      <nav>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/">
            <div className="w-36 ml-8 flex h-[45px]">
              <Image
                className="rounded bg-cover overflow-hidden"
                src={Logo[1].link}
                alt={Logo[0].link}
              />
          
            </div>
          </Link>

          <div>
            <ul className="flex space-x-8 text-lg font-semibold">
                <li>Products</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
          </div>

          <div>
          <ul className="flex space-x-8 text-lg font-semibold text-customBlue">
                <Link href="/login">
                <li>Login in</li></Link>
                <li>Sign up Free</li>
               
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
