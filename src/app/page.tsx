import Banner from "@/components/Banner";
import HomeContent from "@/components/HomeContent";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <TopMenu className="absolute w-full h-[7rem] px-4 flex bg-[rgba(0,0,0,0.55)]" />
        <Banner />
        <HomeContent />
      </main>
    </>
  );
}
