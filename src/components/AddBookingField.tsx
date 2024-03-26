"use client"
import addBooking from "@/libs/addBooking";
import { Button, FormControl } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddBookingField({ campgroundId }: { campgroundId: string }) {

  const session = useSession();
  const [date, setDate] = useState<Date | undefined>(undefined);

  function handleClick() {
    if (!date) {
      alert("Please provide your booking date");
      return;
    }

    addBooking(
      session.data?.user.token,
      {
        campground: campgroundId,
        bookDate: date || new Date(Date.now())
      }
    );
  }

  return (
    <div className="my-10">
      <FormControl className="flex flex-col">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="rounded-md bg-white" onChange={(val) => { setDate(val?.toDate()) }} />
        </LocalizationProvider >
        <Button type="submit" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-4" onClick={() => { handleClick() }}>
          Make Your Booking
        </Button>
      </FormControl>
    </div>
  );
}
