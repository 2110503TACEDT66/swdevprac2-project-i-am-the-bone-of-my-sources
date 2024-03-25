import CampgroundCatalog from "@/components/CampgroundCatalog"
import getCampgrounds from "@/libs/getCampgrounds"
import { Suspense } from "react"
import Link from "next/link"

export default function CampgroundPage() {
    const campgrounds = getCampgrounds()

    return(
        <main className="text-center h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold font-serif text-amber-500 pt-5">Explore our campgrounds!</h1>
            <Suspense fallback={<p className="text-black">Loading ...</p>}>
                <CampgroundCatalog campgroundsJson={campgrounds}/>
            </Suspense>
            <Link href={`/campgrounds/getNearest`}>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-10 py-6 text-white shadow-sm my-10 text-center">
                Search for Nearest Camp
            </button>
            </Link>
        </main>
    )
}