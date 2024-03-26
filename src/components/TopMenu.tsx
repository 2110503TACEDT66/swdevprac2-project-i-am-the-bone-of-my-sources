import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import TopMenuAuthItem from "./TopMenuAuthItem";

const TopMenu = async () => {

  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-[7rem] px-4 flex bg-[rgba(0,0,0,0.55)]">
      <Link href="/">
        <div className="h-[7rem] lg:ml-10  py-4 flex gap-4 justify-center items-center">
          <Image src="/logo.png" alt="logo" fill style={{ objectFit: "contain" }} className="!relative rounded-full bg-[rgba(255,255,255,0.8)]" />
          <div className="font-extrabold text-white">CAMPGROUND</div>
        </div>
      </Link>
      <div className="ml-auto lg:mr-10 flex gap-4 justify-center items-center text-white">
        <Link href="/campgrounds">
          <div className="hover:font-extrabold">Campgrounds</div>
        </Link>
        <Link href="/bookings">
          <div className="hover:font-extrabold">Booking</div>
        </Link>
        <TopMenuItem href="/campgrounds" text="Campgrounds" />
        <TopMenuItem href="/bookings" text="Bookings" />
        <TopMenuAuthItem />
      </div>
    </div >
  );
};

export default TopMenu;
