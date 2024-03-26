"use client"
import { Suspense, useReducer } from "react";
import BookingCard from "./BookingCard";


export default function BookingsList({ bookingsJson, userRole }: { bookingsJson: BookingItemsResponse | null, userRole: string }) {

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
    <>
      <div className="p-6 flex justify-center items-center flex-wrap gap-10">
        {
          list.length ?
            Array.from(list).map(
              (bookingItem: BookingItem) =>
                <Suspense key={bookingItem._id + " Suspense"} fallback={<div>Loading...</div>}>
                  <BookingCard key={bookingItem._id} bookingItem={bookingItem} onRemove={dispatchList} showUser={userRole === "admin"}></BookingCard>
                </Suspense>
            )
            : <div className="text-center w-full text-gray-400 flex flex-col justify-center"> NO BOOKING </div>
        }
      </div>
    </>
  );
}
