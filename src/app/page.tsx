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
        <footer>
          <div className="text-center bg-slate-800 text-white text-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              🌙🌳🏕️ This is the Final Project of SWDEV-II(2110507) 🌙🌳🏕️
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
