import Banner from "@/components/Banner";
import TopMenu from "@/components/TopMenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Banner />
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
