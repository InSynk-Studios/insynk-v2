import "@/styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";
import { Header } from "@/features/Header";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>InSynk Studios</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}
