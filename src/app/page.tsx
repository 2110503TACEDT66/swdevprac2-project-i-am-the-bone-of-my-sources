import TopMenu from "@/components/TopMenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopMenu />
      <main className="overflow-x-hidden">
        <div className="h-[100vh] w-[100vw]">
          <Image
            src="/img/cover1.jpg"
            alt="Next.js Logo"
            fill={true}
            quality={50}
            style={{ objectFit: "cover" }}
            className="!absolute -z-10"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-10">
          <h1>Some Content!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis.</p>
        </div>
      </main>
    </>
  );
}
