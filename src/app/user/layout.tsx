import TopMenu from "@/components/TopMenu";

export default function UserPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopMenu className="absolute w-full h-[7rem] px-4 flex bg-[rgba(0,0,0,0.55)] z-10" />
      {children}
    </>
  );
}