import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Contact, Footer, Header } from "@/sections";
import { FollowCursor } from "@/components/FollowCursor/FollowCursor";

export default function App({ Component, pageProps }) {
  const [displayComponent, setDisplayComponent] = useState(false);

  useEffect(() => {
    function handleMouseDown() {
      setDisplayComponent(true);
    }
    function handleMouseUp() {
      setDisplayComponent(false);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>InSynk Studios</title>
      </Head>
      <Header />
      {displayComponent && <FollowCursor />}
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </Fragment>
  );
}
