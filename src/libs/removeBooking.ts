export async function removeBooking(token: any, bookingId: string): Promise<BookingItemResponse | null> {
    try {
        const response = await fetch(
            `${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            throw new Error("Unable to fetch booking with ID : " + bookingId);
        }
        alert(`Booking ID: ${bookingId} has been removed`);
        return await response.json();
    } catch (e) {
        console.log("Error at removeBooking(token: any, bookingId: string)");
        return null;
    }

}
