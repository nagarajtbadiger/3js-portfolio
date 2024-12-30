"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion, stagger } from "framer-motion";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1, transition: {
      staggerChildren: 0.3,
    }}
  }

  return (
    <div className="fixed h-screen flex items-center justify-center w-full">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              
              className="flex items-center justify-center relative animate-spin-slow hover:pause group">
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem) "
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden">
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </div>

              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />;
                  }
                )}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
