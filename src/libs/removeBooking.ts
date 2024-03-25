export async function removeBooking(token: string, bookingId: string): Promise<BookingItemResponse | null> {
    try {
        const response = await fetch(
            `https://presentation-day-1-i-am-the-bone-of-my-sources.vercel.app/api/v1/bookings/${bookingId}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            throw new Error("Unable to fetch booking with ID : " + bookingId);
        }
        return await response.json();
    } catch (e) {
        console.log("Error at removeBooking(token: string, bookingId: string)");
        return null;
    }

}
