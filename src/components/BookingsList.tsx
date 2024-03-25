"use client"
import { useReducer } from "react";
import BookingCard from "./BookingCard";


export default function BookingsList({ bookingsJson }: { bookingsJson: BookingItemsResponse | null }) {

  const listReducer = (listState: BookingItem[], action: { type: string, _id: string }) => {
    switch (action.type) {
      case "add": {
        throw new Error("ADD BOOKING HERE NOT IMPLEMENTED");
        // return listState;
      } case "remove": {
        if (listState.length > 0) {
          const newListState = [...listState];
          const index = Array.from(newListState).map((value) => value._id).indexOf(action._id);
          newListState.splice(index, 1);
          return newListState;
        }
      }
      default: return listState;
    }
  }

  const [list, dispatchList] = useReducer(listReducer, bookingsJson?.data || []);

  return (
    <div className="flex flex-row border rounded-xl mx-10 my-5">
      {
        list.length ?
          Array.from(list).map((bookingItem: BookingItem) => <BookingCard key={bookingItem._id} bookingItem={bookingItem} onRemove={dispatchList}></BookingCard>)
          : <div className="text-center h-16 text-gray-400 flex flex-col justify-center"> NO BOOKING </div>
      }
    </div>
  );
}
