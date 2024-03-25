"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { removeBooking } from "@/libs/removeBooking";

export default function BookingCard({ bookingItem, onRemove, showUser, session }: { bookingItem: BookingItem, onRemove: Function, showUser?: boolean, session?: any }) {

  const { _id: bookingId, user: userId, bookDate } = bookingItem;
  const { _id: campgroundId, name, picture, tel } = bookingItem.campground;

  return (
    <div className='mx-6 my-6 w-1/3 h-fit bg-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-neutral-200'>
      <Link href={`/bookings/${bookingId}`} className="flex flex-row justify-start">
        <div className="flex flex-row justify-center">
          <Image className="text-center" alt={"Campground " + campgroundId + " image"} src={picture} />
        </div>
        <div className="mx-5">
          <div>Date: {bookDate.toDateString()}</div>
          {showUser ? <h2 className="text-left">UserID: {userId}</h2> : null}
          <h2 className="text-left">Campground: {name}</h2>
          <h2 className="text-left">Tel: {tel}</h2>
          <div className="flex flex-row justify-center">
            <Button className="text-center" onClick={(e) => { e.preventDefault(); onRemove({ type: "remove", _id: bookingId }); removeBooking(session.token, bookingId); }}>Remove Booking</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
