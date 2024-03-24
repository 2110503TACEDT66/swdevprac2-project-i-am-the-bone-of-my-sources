import Image from "next/image";
import getCampground from "@/libs/getCampground";

export default async function CampgroundDetailPage( {params} : {params: {cid:string}} ) {
    
    const CampgroundDetail = await getCampground(params.cid);

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">{CampgroundDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={ CampgroundDetail.data.picture } alt="Campground Image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"></Image>

                <div className="text-md mx-5 text-black text-left">
                <div className="text-md mx-5 text-black text-left">{ CampgroundDetail.data.address }</div>
                <div className="text-md mx-5 text-black text-left">{ CampgroundDetail.data.tel }</div></div>
            </div>
        </main>
    );
}