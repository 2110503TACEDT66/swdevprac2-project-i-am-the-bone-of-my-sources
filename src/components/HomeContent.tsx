'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HomeContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        ref.current?.classList.add("fade-in");
      } else {
        ref.current?.classList.remove("fade-in");
      }
    });
  }, []);
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center p-10 bg-slate-800">
        <div ref={ref} className="flex gap-16 h-[40rem] z-10 opacity-0 fade-in">
          <div className="relative flex items-center w-[30rem] fade-in hover:w-[31rem] cursor-pointer">
            <div className="w-full font-extrabold text-[8rem] text-center break-words bg-clip-text text-transparent bg-[url('/img/home01.png')]">LET'S</div>
            <Image src="/img/home01.png" quality={20} alt="logo" fill style={{ objectFit: "cover", borderRadius: '20px', zIndex: -1 }} />
          </div>
          <div className="relative flex items-center w-[30rem] fade-in hover:w-[31rem] cursor-pointer">
            <div className="w-full font-extrabold text-[8rem] text-center break-words bg-clip-text text-transparent bg-[url('/img/home01.png')]">ENJOY</div>
            <Image src="/img/home02.png" quality={20} alt="logo" fill style={{ objectFit: "cover", borderRadius: '20px', zIndex: -1 }} />
          </div>
          <div className="relative flex items-center w-[30rem] fade-in hover:w-[31rem] cursor-pointer">
            <div className="w-full font-extrabold text-[8rem] text-center break-words bg-clip-text text-transparent bg-[url('/img/home01.png')]">REST</div>
            <Image src="/img/home03.png" quality={20} alt="logo" fill style={{ objectFit: "cover", borderRadius: '20px', zIndex: -1 }} />
          </div>
        </div>
      </div >
    </>
  );
};

export default HomeContent;