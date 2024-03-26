import TopMenu from "@/components/TopMenu";

export default function WeatherLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
