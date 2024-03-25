export async function getBookings(token: string): Promise<BookingItemsResponse | null> {
    try {
        const response = await fetch(
            `https://presentation-day-1-i-am-the-bone-of-my-sources.vercel.app/api/v1/bookings`,
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
        console.log("Error at getBookings(token: string)");
        return null;
    }
}
