import BookingDetailCard from "@/components/BookingDetailCard";
import { authOptions } from "@/libs/authOptions";
import { getBooking } from "@/libs/getBooking";
import getCampgrounds from "@/libs/getCampgrounds";
import getUserProfile from "@/libs/getUserProfile2";
import { getServerSession } from "next-auth";

export default async function BookingDetailPage({ params }: { params: { id: string } }) {

    const session = await getServerSession(authOptions);
    const bookingItemResponse = await getBooking(session?.user.token, params.id);
    const campgroundJson = await getCampgrounds();
    const userResponse = await getUserProfile(session?.user.token);
    const showUser = userResponse.data.role === "admin";

    return (
        <main className="flex flex-row justify-center">
            {bookingItemResponse ?
                <BookingDetailCard bookingItem={bookingItemResponse?.data} showUser={showUser} campgroundsList={campgroundJson.data} />
                : <div> Booking ID : {params.id} not found </div>
            }
        </main>
    );
}
