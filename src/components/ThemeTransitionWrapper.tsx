'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// Wrapper component to apply transition
export default function ThemeTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force re-render for initial animation

  useEffect(() => {
    // For initial load animation
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 400); // Must match animation duration in globals.css

    return () => clearTimeout(timer);
  }, [resolvedTheme]);

  return (
    <div key={key} className={isPageTransitioning ? 'animate-page-fade' : ''}>
      {children}
    </div>
  );
}
