import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PageLoader from "../components/ui/PageLoader";
import "../styles/globals.css";

const MIN_LOADING_TIME = 2000; // 👈 2 seconds

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

    // Initial load delay
    setTimeout(() => setLoading(false), MIN_LOADING_TIME);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on("routeChangeError", handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
      router.events.off("routeChangeError", handleEnd);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <Component {...pageProps} />
    </>
  );
}
