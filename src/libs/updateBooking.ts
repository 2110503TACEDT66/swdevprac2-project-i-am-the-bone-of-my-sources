export default async function updateBooking(token: any, bookingItem: { _id: string, user: string, campground: string, bookDate: Date }) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/bookings/${bookingItem._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user: bookingItem.user,
        campground: bookingItem.campground,
        bookDate: bookingItem.bookDate
      })
    }
  );
  // console.log(bookingItem.campground);
  const responseJson = await response.json();
  console.log(responseJson);
  if (responseJson.success) alert("Booking has been updated.");
  else alert(responseJson.message);
  return responseJson;
}
