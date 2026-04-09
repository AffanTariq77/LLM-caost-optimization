import React, { useState, useEffect } from "react";
import logo from "@/assets/LLMpic.png";

export default function Hero3DImage() {
  const [is3DEnabled, setIs3DEnabled] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    // Never enable 3D - just use static image for performance
    // This eliminates Three.js from initial bundle
    setIs3DEnabled(false);
  }, []);

  // Always return static image - much faster
  return (
    <img 
      src={logo} 
      alt="LLM Optimization" 
      className="w-full max-w-md md:max-w-lg lg:max-w-xl transition-transform duration-300 hover:scale-105"
      loading="lazy"
      decoding="async"
    />
  );
}
