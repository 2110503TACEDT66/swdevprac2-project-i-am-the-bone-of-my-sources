"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { removeBooking } from "@/libs/removeBooking";
import { useSession } from "next-auth/react";
import { MouseEvent } from "react";

export default function BookingCard({ bookingItem, onRemove, showUser }: { bookingItem: BookingItem, onRemove: Function, showUser?: boolean }) {

  let session = useSession();
  const { _id: bookingId, user: userId, bookDate } = bookingItem;
  const { _id: campgroundId, name, picture, tel } = bookingItem.campground;

  if (!onRemove) { onRemove = () => { } }
  function onClick(e: MouseEvent) {
    e.preventDefault();
    onRemove({ type: "remove", _id: bookingId });
    removeBooking(session.data?.user.token, bookingId);
  }

  return (
    <Link href={`/bookings/${bookingId}`}>
      <div className='px-5 py-6 w-[37rem] h-[16rem] flex justify-center items-center bg-white rounded-lg border-[2px] border-neutral-200 hover:bg-neutral-200 hover:shadow-lg hover:shadow-gray-600'>
        <div className="flex flex-row justify-center">
          <Image style={{ objectFit: "cover", height: "200px" }} alt={"Campground " + campgroundId + " image"} src={picture} width={800} height={800} />
        </div>
        <div className="ml-5 w-full h-full flex flex-col">
          <div>Date: {new Date(bookDate).toLocaleDateString()}</div>
          {showUser ? <h2 className="text-left">UserID: {userId}</h2> : null}
          <h2 className="text-left">Campground: {name}</h2>
          <h2 className="text-left">Tel: {tel}</h2>
          <Button className="mt-auto self-end text-center text-white w-full bg-red-500 hover:bg-red-400" onClick={(e) => onClick(e)}>Remove Booking</Button>
        </div>
      </div>
    </Link>
  );
}
