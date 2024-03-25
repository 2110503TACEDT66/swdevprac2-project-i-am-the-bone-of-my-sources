"use client"
import Image from "next/image";
import { Button } from "@mui/material";
import { removeBooking } from "@/libs/removeBooking";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function BookingDetailCard({ bookingItem, showUser }: { bookingItem: BookingItem, showUser: boolean }) {

  const session = useSession();
  const [removed, setRemoved] = useState(false);
  const { _id: bookingId, user: userId, bookDate } = bookingItem;
  const { _id: campgroundId, name, picture, tel } = bookingItem.campground;

  return (
    !removed ?
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg'>
        <div className="flex flex-row justify-center">
          <Link href={`/campgrounds/${campgroundId}`}>
            <Image className="text-center" alt={"Campground " + campgroundId + " image"} src={picture} width={1260} height={750} />
          </Link>
        </div>
        <Button className="text-center text-white w-full rounded-[0] bg-blue-500 hover:bg-blue-400">
          <Link href={`/campgrounds/${campgroundId}/weather`} className="w-full h-full text-center">See weather</Link>
        </Button>
        <div className="mx-5 my-2">
          <br />
          <div>Date: {new Date(bookDate).toLocaleDateString()}</div>
          <h2 className="text-left">Campground: {name}</h2>
          <h2 className="text-left">Tel: {tel}</h2>
          {showUser ? <h2 className="text-left">UserID: {userId}</h2> : null}
          <br />
        </div>
        <Button className="text-center text-white w-full bg-red-500 hover:bg-red-400" onClick={() => {
          removeBooking(session.data?.user.token, bookingId);
          setRemoved(true);
        }}>
          Remove Booking
        </Button>
      </div >
      :
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg text-center'>
        Booking ID : {bookingId} has been removed.
      </div>
  );
}
