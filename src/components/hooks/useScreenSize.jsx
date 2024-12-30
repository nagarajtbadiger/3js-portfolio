"use client";

import React, { useEffect } from 'react';
import { useState } from 'react';

const useScreenSize = () => {
    const [screenSize, SetScreenSize] = useState()

    useEffect(() => {
        function getScreenSize() {
            return window.innerWidth;
        }
        function handleResize() {
            SetScreenSize(getScreenSize())
        }
        handleResize();

        window.addEventListener('resize', handleResize)

        return()=> window.removeEventListener('resize', handleResize)
    }, [])
  return screenSize
  
}

export default useScreenSize