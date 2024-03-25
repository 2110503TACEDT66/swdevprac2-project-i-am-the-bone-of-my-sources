export async function getBookings(token: any): Promise<BookingItemsResponse | null> {
    try {
        const response = await fetch(
            `${process.env.BACKEND_URL}/api/v1/bookings`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            throw new Error("Unable to fetch bookings");
        }
        return await response.json();
    } catch (e) {
        console.log("Error at getBookings(token: any)");
        return null;
    }
}
