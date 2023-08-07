// components/Navbar.tsx
'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname()

  return (
    <div className=" w-full h-auto border-t mt-5 pt-5">
      {/* <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className=" w-auto text-2xl font-bold">
            Naufal
        </div>
        <div>
          <div className=" hover:text-purple-600">home</div>
          <div className=" hover:text-purple-600">blog</div>
          <div className=" hover:text-purple-600">about</div>
        </div>
      </div> */}
      <div className=" w-full text-center my-2">
        - Copyright (c) 2023 -
      </div>
    </div>
  );
};
export default Footer;
