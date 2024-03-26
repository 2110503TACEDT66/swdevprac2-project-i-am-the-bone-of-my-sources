import Image from "next/image";
import getCampground from "@/libs/getCampground";
import getCampgroundWeather from "@/libs/getCampWeather";
import AddBookingField from "@/components/AddBookingField";

export default async function CampgroundDetailPage({ params }: { params: { cid: string } }) {

    const CampgroundDetail = await getCampground(params.cid);
    //const WeatherDetail = await getCampgroundWeather(params.cid);

    return (
        <main className="text-center p-5 h-[100vh] w-[100vw] flex flex-col items-center">
            <h1 className="text-lg font-medium text-black">{CampgroundDetail.data.name}</h1>
            <div className="my-5 justify-center flex items-center">
                <Image src={CampgroundDetail.data.picture} alt="Campground Image" width={0} height={0} sizes="100vw" className="rounded-lg w-[60%]"></Image>

            </div>
            <div className="text-md mx-5 text-black text-left">
                <div className="text-md mx-5 text-black text-left">{CampgroundDetail.data.address}</div>
                <div className="text-md mx-5 text-black text-left">{CampgroundDetail.data.tel}</div>
            </div>
            <div>
                <AddBookingField campgroundId={params.cid} />
            </div>
        </main>
    );
}
