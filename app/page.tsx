"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SplashScreen from "./components/SplashScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Releases from "./components/Releases";
import Artists from "./components/Artists";
import Events from "./components/Events";
import News from "./components/News";
import Demos from "./components/Demos";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const SPLASH_KEY = "loco-splash-seen";

export default function Home() {
  // null = aún no sabemos (evita parpadeo en SSR)
  const [showSplash, setShowSplash] = useState<boolean | null>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SPLASH_KEY) === "1";
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowSplash(!seen);
  }, []);

  const finishSplash = () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
    } catch {}
    setShowSplash(false);
  };

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>{showSplash && <SplashScreen key="splash" onComplete={finishSplash} />}</AnimatePresence>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-3 focus:text-bg"
      >
        Saltar al contenido
      </a>

      <Nav />
      <main id="main">
        <Hero ready={showSplash === false} />
        <Ticker />
        <About />
        <Releases />
        <Artists />
        <Events />
        <News />
        <Demos />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
