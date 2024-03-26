import TopMenu from "@/components/TopMenu";

export default function BookingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}