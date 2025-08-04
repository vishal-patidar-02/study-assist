"use client"

import Image from "next/image";
import {Navigation} from "./components/Navigation";
import {HeroSection} from "./components/HeroSection";
import {Footer} from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{ fontFamily: 'Mona Sans, system-ui, -apple-system, sans-serif' }}>
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
}
