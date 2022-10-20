import Link from "next/link";
import React, { FC } from "react";
import { BsFillCartFill, BsPersonFill } from 'react-icons/bs';

export const Nav: FC = () => {
  return (
    <nav className="flex justify-around py-2 bg-white/80
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10 text-black text-2xl ">
      <Link href="/">
        <img className="w-30 h-10 cursor-pointer" src="https://pbs.twimg.com/media/DdL7vaFWkAAmSRy.png:large" alt="" />
      </Link>
      <div className="flex space-x-2">
        <Link href="/#login">
          <BsPersonFill className="cursor-pointer my-auto"/>
        </Link>
        <Link href="/#cart">
          <BsFillCartFill className="cursor-pointer my-auto h-5"/>
        </Link>
      </div>
    </nav>
  );
};


