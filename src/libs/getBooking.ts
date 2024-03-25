export async function getBooking(token: any, bookingId: string): Promise<BookingItemResponse | null> {
    try {
        const response = await fetch(
            `${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            console.log(await response.json());
            throw new Error("Unable to fetch booking with ID : " + bookingId);
        }
        return await response.json();
    } catch (e) {
        console.log("Error at getBooking(token: any, bookingId: string)");
        return null;
    }

}
