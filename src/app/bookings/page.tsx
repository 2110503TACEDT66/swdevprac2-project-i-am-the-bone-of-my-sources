import AddBookingTab from "@/components/AddBooking";
import BookingsList from "@/components/BookingsList";
import UserInfo from "@/components/UserInfo";
import { getBookings } from "@/libs/getBookings";
import { Suspense } from "react";

export default async function BookingsManagementPage() {

  // const session = await getServerSession(authOptions);
  // const bookingsJson = await getBookings(session.token);
  // const userInfo = await getUserProfile(session.token);

  const userInfo = {
    _id: "MockID",
    name: "John Doe",
    email: "john@email.com",
    tel: "000-000-0000"
  }
  const bookingsJson: BookingItemsResponse = {
    success: true,
    count: 1,
    data: [
      {
        _id: "MockID",
        user: "User Mock ID",
        campground: {
          _id: "",
          name: "",
          picture: "",
          tel: "",
          id: ""
        },
        bookDate: new Date(Date.now()),
        createdAt: new Date(Date.now()),
        __v: 0
      }
    ]
  }

  return (
    <main>
      <div className="w-full flex flex-row">
        <div className="w-1/5">
          <UserInfo userInfo={userInfo} />
        </div>
        <div className="w-4/5">
          <BookingsList bookingsJson={bookingsJson} />
        </div>
      </div>
    </main>
  );
}
