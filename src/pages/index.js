import React, { useEffect, useState } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Academics from "../components/Academics";
import Athletics from "../components/Athletics";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Master timeline orchestration on layout load
    const masterTimeline = gsap.timeline();
    
    masterTimeline.fromTo(
      ".global-reveal",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.6, 
        ease: "power4.out", 
        stagger: 0.18 
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0a09] selection:bg-[#f5f2eb] selection:text-[#0b0a09] overflow-hidden">
      <Head>
        <title>SANVI RAI // The Scholastic Archive</title>
        <meta name="description" content="The digital chronicle of Sanvi Rai. Scholar, Archivist, and Athlete." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <div className="w-full h-[1px] vintage-divider" />
        <Academics />
        <div className="w-full h-[1px] vintage-divider" />
        <Athletics />
      </main>

      <footer className="w-full py-16 text-center text-[10px] tracking-[0.5em] text-[#dcd7ca]/20 uppercase border-t border-[#f5f2eb]/5 relative z-20 bg-[#0b0a09]">
        © 2026 ARCHIVE ENGINE // DESIGNED BY PVP_PRO // ALL HARDWARE DATA VALIDATED
      </footer>
    </div>
  );
}