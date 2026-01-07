"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaNet({ className = "" }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 0.6,
          scaleMobile: 1.0,
          points: 12.0,
          maxDistance: 14.0,
          spacing: 13.0,
          backgroundColor: 0x000000, // dark only
        });
      }
    };

    const destroyVanta = () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };

    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");

      if (isDark) {
        initVanta();
      } else {
        destroyVanta();
      }
    };

    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      destroyVanta();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`
        absolute inset-0 w-full h-full
        dark:block hidden
        ${className}
      `}
    >
      {/* Vanta effect container - no content wrapper needed */}
    </div>
  );
}
