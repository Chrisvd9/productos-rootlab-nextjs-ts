import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Nav } from "../Nav";

interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-black min-h-screen flex flex-col font-thin">
      <Head>
        <title>{title} | Rootlab Products</title>
        {description && <meta name={title} content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white h-14">
        <Nav />
      </header>

      <main className="grow flex flex-col text-white bg-white">{children}</main>

      <Footer />
    </div>
  );
};
