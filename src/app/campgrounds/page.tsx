import CampgroundCatalog from "@/components/CampgroundCatalog"
import getCampgrounds from "@/libs/getCampgrounds"
import { Suspense } from "react"

export default function CampgroundPage() {
    const campgrounds = getCampgrounds()

    return(
        <main className="text-center">
            <h1 className="text-2xl font-bold font-serif text-black pt-5">Explore our campgrounds!</h1>
            <Suspense fallback={<p className="text-black">Loading ...</p>}>
                <CampgroundCatalog campgroundsJson={campgrounds}/>
            </Suspense>
        </main>
    )
}