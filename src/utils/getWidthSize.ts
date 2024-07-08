"use client"
import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
          if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
          }
        }

        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return width;
}
