import Link from "next/link";
import React from "react";

export const Specialbtn = () => {
  return (
    <>
      <Link href={"/products"}>
        <div className="special-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </>
  );
};
