
export default function CampgroundsLayout ( {children} : {children:React.ReactNode} ) {
    return (
        <div className="bg-gradient-radial from-cyan-200 to-gray-100">
            {children}
        </div>
    );
}