"use client"
import Image from "next/image";
import { Button } from "@mui/material";
import { removeBooking } from "@/libs/removeBooking";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function BookingDetailCard({ bookingItem, showUser }: { bookingItem: BookingItem, showUser: boolean }) {

  const session = useSession();
  const [removed, setRemoved] = useState(false);
  const { _id: bookingId, user: userId, bookDate } = bookingItem;
  const { _id: campgroundId, name, picture, tel } = bookingItem.campground;

  return (
    !removed ?
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-neutral-200'>
        <div className="flex flex-row justify-center">
          <Image className="text-center" alt={"Campground " + campgroundId + " image"} src={picture} />
        </div>
        <div className="mx-5">
          <div>Date: {new Date(bookDate).toLocaleDateString()}</div>
          {showUser ? <h2 className="text-left">UserID: {userId}</h2> : null}
          <h2 className="text-left">Campground: {name}</h2>
          <h2 className="text-left">Tel: {tel}</h2>
          <div className="flex flex-row justify-center mt-3">
            <Button className="text-center" onClick={() => {
              removeBooking(session.data?.user.token, bookingId);
              // this is stupid
              setRemoved(true);
            }}>
              Remove Booking
            </Button>
          </div>
        </div>
      </div>
      :
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-neutral-200'>
        Booking ID : {bookingId} has been removed.
      </div>
  );
}
