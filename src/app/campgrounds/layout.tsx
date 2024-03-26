import TopMenu from "@/components/TopMenu";

export default function CampgroundsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-radial from-teal-100 to-[rgba(23,35,48,255)]">
            <TopMenu />
            {children}
        </div>
    );
}