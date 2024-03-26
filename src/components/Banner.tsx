'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsMounted(true);
    addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsMounted(false);
      } else {
        setIsMounted(true);
      }
    });
    addEventListener("mousemove", (e) => {
      const x = e.clientX / 70;
      const y = e.clientY / 70;
      if (textRef.current) {
        textRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  }, []);
  return (
    <div className="h-[100vh] w-[100vw]">
      <Image
        src="/img/cover1.jpg"
        alt="Next.js Logo"
        fill={true}
        quality={50}
        style={{ objectFit: "cover" }}
        className="!absolute -z-10"
      />
      {
        isMounted &&
        <div ref={textRef} className="absolute md:top-[50%] md:left-[15%] leading-[80px] select-none text-white fade-in-then-text-glowing">
          <div className="text-[100px] font-extrabold opacity-85">GO CAMPING</div>
          <div className="text-[100px] font-extrabold filter blur-[2px] scale-y-[-1] opacity-85">GO CAMPING</div>
        </div>
      }
      <div className="absolute bottom-[10%] right-[7%]">
        <button className="font-extrabold bg-white p-4 px-6 rounded-lg">More↓</button>
      </div>
    </div>
  );
};

export default Banner;