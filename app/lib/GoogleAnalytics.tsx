"use client";

import { useEffect } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-ZF5JW167V8", {
          page_path: url,
          page_location: window.location.href,
          page_title: document.title,
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
        });
      }
    };

    // Inisialisasi untuk halaman pertama
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      handleRouteChange(window.location.pathname);
    }

    // Anda bisa menambahkan logika router jika perlu
    // router.events.on("routeChangeComplete", handleRouteChange);
    // return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZF5JW167V8`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZF5JW167V8', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
