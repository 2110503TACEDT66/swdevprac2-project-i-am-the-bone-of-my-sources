import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";
import getCampgroundWeather from "@/libs/getCampWeather";

export default async function CampgroundDetailPage( {params} : {params: {cid:string}} ) {
    
    const CampgroundDetail = await getCampground(params.cid);
    //const WeatherDetail = await getCampgroundWeather(params.cid);

    return(
        <main className="text-center p-5 h-[100vh] w-[100vw]">
            <h1 className="text-lg font-medium text-black">{CampgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={ CampgroundDetail.data.picture } alt="Campground Image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"></Image>

                <div className="text-md mx-5 text-black text-left">
                <div className="text-md mx-5 text-black text-left">{ CampgroundDetail.data.address }</div>
                <div className="text-md mx-5 text-black text-left">{ CampgroundDetail.data.tel }</div>
                
                <Link href={`/bookings?id=${params.cid}&name=${CampgroundDetail.data.name}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-10">
                    Make Your Booking
                </button>
                </Link>
                </div>
            </div>
        </main>
    );
}