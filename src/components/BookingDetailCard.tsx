"use client"
import Image from "next/image";
import { Button, Input, MenuItem, Select } from "@mui/material";
import { removeBooking } from "@/libs/removeBooking";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import updateBooking from "@/libs/updateBooking";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function BookingDetailCard({ bookingItem, campgroundsList, showUser }: { bookingItem: BookingItem, campgroundsList: CampgroundItem[], showUser: boolean }) {

  const session = useSession();
  const [removed, setRemoved] = useState(false);
  const { _id: bookingId, user: userId, bookDate } = bookingItem;
  const { _id: campgroundId, name, picture, tel } = bookingItem.campground;

  const [date, setDate] = useState<Date | undefined>(new Date(bookDate));
  const [campId, setCampId] = useState(campgroundId);

  const telMap = new Map(Array.from(campgroundsList).map((campgroundItem: CampgroundItem) => [campgroundItem.id, campgroundItem.tel]));
  const [campTel, setCampTel] = useState<string | undefined>(tel);
  const [userIdState, setUserId] = useState(userId);

  return (
    !removed ?
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg'>
        <div className="flex flex-row justify-center">
          <Link href={`/campgrounds/${campgroundId}`}>
            <Image className="text-center" alt={"Campground " + campgroundId + " image"} src={picture} width={1260} height={750} />
          </Link>
        </div>
        <Button className="text-center text-white w-full rounded-[0] bg-blue-500 hover:bg-blue-400">
          <Link href={`/weather/${campgroundId}`} className="w-full h-full text-center">See weather</Link>
        </Button>
        <div className="mx-5 my-2">
          <br />
          <br />
          <h2 className="text-left">Date:
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="ml-4 relative bottom-4" defaultValue={dayjs(new Date(bookDate))} onChange={(val) => { setDate(val?.toDate()) }} />
            </LocalizationProvider></h2>
          <h2 className="text-left">Campground:
            <Select className="ml-4" defaultValue={campgroundId} onChange={(e) => { setCampId(e.target.value); setCampTel(telMap.get(e.target.value)) }}>
              {Array.from(campgroundsList).map((campgroundItem: CampgroundItem) => <MenuItem key={campgroundItem.id} value={campgroundItem.id}>{campgroundItem.name}</MenuItem>)}
            </Select>
          </h2>
          <br />
          <h2 className="text-left">Tel: {campTel}</h2>
          <br />
          {showUser ? <h2 className="text-left">UserID:
            <Input type="text" className="ml-4 border border-gray-200" defaultValue={userId} onChange={(e) => setUserId(e.currentTarget.value)} spellCheck={false}></Input>
          </h2>
            : null}
          <br />
        </div>
        <div className="flex flex-row">
          <Button className="text-center text-white w-[50%] bg-blue-500 hover:bg-blue-400 rounded-[0]" onClick={() => {
            updateBooking(
              session.data?.user.token,
              {
                _id: bookingId,
                user: userIdState,
                campground: campId,
                bookDate: date || new Date(Date.now())
              }
            );
          }}>
            Update Booking
          </Button>
          <Button className="text-center text-white w-[50%] bg-red-500 hover:bg-red-400 rounded-[0]" onClick={() => {
            removeBooking(session.data?.user.token, bookingId);
            setRemoved(true);
          }}>
            Remove Booking
          </Button>
        </div>
      </div >
      :
      <div className='mx-5 my-6 w-[45%] h-fit bg-white rounded-lg shadow-lg text-center'>
        Booking ID : {bookingId} has been removed.
      </div>
  );
}
