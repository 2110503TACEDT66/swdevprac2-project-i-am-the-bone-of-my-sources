'use client'
import CampgroundsMap from "@/components/Maps";
import getCampground from "@/libs/getCampground";
import { Button } from "@mui/material";
import { Rating } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ExplorePage = () => {
  const [campgrounds, setCampgrounds] = useState<CampgroundItem>({
    _id: '',
    name: '',
    address: '',
    picture: 'https://cdn.outsideonline.com/wp-content/uploads/2021/06/03/campsite-at-night_s.jpg',
    location: {
      type: '',
      coordinates: []
    },
    tel: '',
    __v: 0,
    id: ''
  });
  useEffect(() => {
    fetchCampground('65e5989c990b53611a651abc');
  }, []);

  const fetchCampground = async (id: string) => {
    const campgrounds: CampgroundItem = await getCampground(id).then((res) => res.data);
    setCampgrounds(campgrounds);
  };

  const CampMap = dynamic(() => import('@/components/Maps'), { ssr: false });

  return (
    <main className="h-[100vh] w-[100vw] pt-16 flex justify-center items-center bg-slate-800">
      <div className="h-fit w-fit flex bg-white rounded-lg overflow-hidden">
        <div className="w-[30rem] h-[40rem]">
          <CampMap className="w-[30rem] h-[40rem]" onMarkerClick={fetchCampground} />
        </div>
        <div className="ml-6 flex items-center">
          <div className="relative w-[3px] h-[35rem] bg-black rounded-lg"><span className="absolute top-[50%] -left-2 bg-white">🏕️</span></div>
          <div className="h-full w-[25rem] ml-6">
            <div className="relative w-full h-[20rem]">
              <Image src={campgrounds.picture} alt="Campground Image" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="mt-6 px-4 flex flex-col items-center gap-3">
              <div className="w-full text-wrap text-center text-xl font-bold line-clamp-2">{campgrounds.name}</div>
              <Rating name="read-only" value={4} />
              <div className="mt-5 w-full text-wrap text-left text-sm flex">
                <div className="text-nowrap mr-2">📌Adress:</div>
                <div>{campgrounds.address}</div>
              </div>
              <div className="w-full text-wrap text-left text-sm">📞Tel: {campgrounds.tel}</div>
              <Link href={`/campgrounds/${campgrounds.id}`}>
                <Button variant="outlined" color="primary" className="w-[10rem] mt-5">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExplorePage;