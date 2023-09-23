import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookie from "../components/banners/Cookie";

function MyApp({ Component, pageProps }) {
  const [isCookie, setIsCookie] = useState(false);

  useEffect(() => {
    const isFound = localStorage.getItem("iknowyou");

    if (!isFound) {
      setTimeout(() => {
        setIsCookie(true);
      }, 5000);
    }
  }, []);
  const cookieHandler = () => {
    localStorage.setItem("iknowyou", "true");
    setIsCookie(false);
  };
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/LOGODODO-01.svg" /> */}
        {/* <link rel="apple-touch-icon" href="/LOGODODO-01.svg" /> */}
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/Неозаглавен-1440-t-1440-пиксела.png"
        />
        <meta
          name="thumbnail"
          content="https://www.linkpicture.com/q/Неозаглавен-1440-t-1440-пиксела.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" />
      </Head>
      <Cookie setIsCookie={cookieHandler} isCookie={isCookie} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
