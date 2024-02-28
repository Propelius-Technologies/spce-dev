import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import MainPage from "@/sections/mainPage";

export default function Home(page: ReactNode) {
  return (
    <>
      <Head>
        <title>SPCE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <MainPage />
        </main>
    </>
  );
}