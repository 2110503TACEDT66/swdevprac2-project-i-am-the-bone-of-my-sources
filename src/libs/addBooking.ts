export default async function addBooking(token: any, bookingItem: { campground: string, bookDate: Date }) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/campgrounds/${bookingItem.campground}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ bookDate: bookingItem.bookDate })
    }
  )
  if (response.status === 400) { alert("You cannot have more than 3 bookings"); return await response.json() }
  const responseJson = await response.json();
  if (responseJson.success) alert("Booked.");
  else alert(responseJson.message);
  return responseJson;
}
