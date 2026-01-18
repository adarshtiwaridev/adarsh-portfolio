import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PageLoader from "../components/ui/PageLoader";
import "../Styles/globals.css";
import Chatbot from "../components/sections/Chatbot";

const MIN_LOADING_TIME = 2000; // 2 sec (SEO + UX friendly)

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const handleStart = () => {
      startTimeRef.current = Date.now();
      setLoading(true);
    };

    const handleEnd = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = MIN_LOADING_TIME - elapsed;

      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    };

    // initial load
    setTimeout(() => setLoading(false), MIN_LOADING_TIME);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on("routeChangeError", handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
      router.events.off("routeChangeError", handleEnd);
    };
  }, [router]);

  return (
    <>
      {/* 🔥 GLOBAL SEO (Pages Router correct way) */}
    <Head>
  <title>
    Adarshtiwaridev | Adarsh Tiwari – Full Stack Developer & Software Engineer
  </title>

  <meta
    name="description"
    content="Adarshtiwaridev is the official portfolio of Adarsh Tiwari, a Full Stack Developer and Software Engineer specializing in Next.js, React, and scalable web applications."
  />

  <meta
    name="keywords"
    content="Adarshtiwaridev, Adarsh Tiwari, Full Stack Developer, Software Engineer, Next.js Developer, React Developer"
  />

  <meta name="author" content="Adarsh Tiwari" />
  <meta name="robots" content="index, follow" />

  {/* ✅ FAVICON (CORRECT WAY) */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" href="/favicon.jpg" className="w-10 h-10 rounded-full" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.adarshtiwaridev.com" />

  {/* Open Graph */}
  <meta property="og:title" content="Adarshtiwaridev | Adarsh Tiwari" />
  <meta
    property="og:description"
    content="Professional portfolio of Adarsh Tiwari showcasing modern full stack projects."
  />
  <meta property="og:url" content="https://www.adarshtiwaridev.com" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Adarshtiwaridev | Adarsh Tiwari" />
  <meta
    name="twitter:description"
    content="Official portfolio of Adarsh Tiwari, Full Stack Developer."
  />
</Head>

      {loading && <PageLoader />}
      <Component {...pageProps} />
      <Chatbot />
    </>
  );
}
