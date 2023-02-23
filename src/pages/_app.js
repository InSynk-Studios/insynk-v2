import "@/styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";
import { Footer, Header } from "@/sections";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>InSynk Studios</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
