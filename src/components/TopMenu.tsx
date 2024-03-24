import Image from "next/image";
import Link from "next/link";

const TopMenu = () => {
  return (
    <div className="w-full h-[7rem] px-4 flex bg-[rgba(0,0,0,0.55)]">
      <Link href="">
        <div className="h-[7rem] lg:ml-10  py-4 flex gap-4 justify-center items-center">
          <Image src="/logo.png" alt="logo" fill style={{ objectFit: "contain" }} className="!relative rounded-full bg-[rgba(255,255,255,0.8)]" />
          <div className="font-extrabold text-white">CAMPGROUND</div>
        </div>
      </Link>
      <div className="ml-auto flex gap-4 justify-center items-center text-white">
        <Link href="">
          <div className="hover:font-extrabold">Campgrounds</div>
        </Link>
        <Link href="">
          <div className="hover:font-extrabold">Booking</div>
        </Link>
        <Link href="">
          <div className="hover:font-extrabold">Login</div>
        </Link>
        <Link href="">
          <div className="font-extrabold p-4 rounded-lg bg-black hover:bg-white hover:text-black">Sign-up</div>
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;