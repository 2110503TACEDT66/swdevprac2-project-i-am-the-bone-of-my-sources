import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import TopMenuAuthItem from "./TopMenuAuthItem";

const TopMenu = async ({ className }: { className?: string }) => {

  const session = await getServerSession(authOptions);

  return (
    <div className={className ? className : "w-full h-[7rem] px-4 flex bg-[rgba(0,0,0,0.55)]"}>
      <Link href="/">
        <div className="h-[7rem] lg:ml-10  py-4 flex gap-4 justify-center items-center">
          <Image src="/logo.png" alt="logo" fill style={{ objectFit: "contain" }} className="!relative rounded-full bg-[rgba(255,255,255,0.8)]" />
          <div className="font-extrabold text-white">CAMPGROUND</div>
        </div>
      </Link>
      <div className="ml-auto lg:mr-10 flex gap-4 justify-center items-center text-white">
        <TopMenuItem href="/campgrounds" text="Campgrounds" />
        <TopMenuItem href="/bookings" text="Bookings" />
        <TopMenuAuthItem />
      </div>
    </div >
  );
};

export default TopMenu;

export function scrollToSection(sectionId: string): void {
  const sectionElement: HTMLElement | null = document.getElementById(sectionId);

  if (sectionElement) {
    const start: number = window.scrollY;
    const target: number = sectionElement.offsetTop;
    const duration: number = 500; // milliseconds
    const startTime: number = performance.now();

    const animateScroll = (time: number): void => {
      const elapsed: number = time - startTime;
      const progress: number = Math.min(elapsed / duration, 1);
      const easing: number = easeInOutQuad(progress);

      const newScrollTop: number = start + (target - start) * easing;
      window.scroll(0, newScrollTop);
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
  }
}

