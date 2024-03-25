import BookingCard from "@/components/BookingCard";
import { getBooking } from "@/libs/getBooking";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingDetailPage({ params }: { params: { id: string } }) {

    // const session = useSession();
    const session = { token: "" };
    const bookingItemResponse = await getBooking(session.token, params.id);
    const user = await getUserProfile(session.token);

    return (
        <main className="flex flex-row justify-center">
            {bookingItemResponse ?
                <BookingCard bookingItem={bookingItemResponse.data} onRemove={() => { }} showUser={user.role === "admin"} />
                : <div>BOOKING WITH ID {params.id} NOT FOUND</div>
            }
        </main>
    );
}
