'use client';

import { useEffect } from 'react';

export default function FaviconHandler() {
  useEffect(() => {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const faviconElement = document.getElementById('favicon');

    const updateFavicon = () => {
      if (faviconElement) {
        if (themeMediaQuery.matches) {
          faviconElement.setAttribute('href', '/favicons/favicon.ico');
        } else {
          faviconElement.setAttribute('href', '/favicons/favicon-dark.ico');
        }
      }
    };

    updateFavicon();
    themeMediaQuery.addEventListener('change', updateFavicon);

    return () => {
      themeMediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

  return null; // This component doesn't render anything
}
