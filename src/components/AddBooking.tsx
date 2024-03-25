"use client"
import { Button, FormControl } from "@mui/base";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CampgroundsSelector from "./CampgroundsSelector";

export default function AddBookingTab() {
  return (
    <div className="border border-black rounded mx-10 my-5">
      <FormControl className="flex flex-col">
        <CampgroundsSelector />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider >
        <Button type="submit">Add Booking</Button>
      </FormControl>
    </div>
  );
}
