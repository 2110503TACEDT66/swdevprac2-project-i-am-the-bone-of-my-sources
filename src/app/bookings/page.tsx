import BookingsList from "@/components/BookingsList";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/libs/authOptions";
import { getBookings } from "@/libs/getBookings";
import getUserProfile from "@/libs/getUserProfile2";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function BookingsManagementPage() {

  const session = await getServerSession(authOptions);
  // console.log(" SESSION === ");
  // console.log(session);
  // console.log("=============");
  if (!session) { redirect("/auth/signup") };
  const bookingsJson = await getBookings(session?.user.token);
  const userInfoResponse = await getUserProfile(session?.user.token);

  return (
    <main>
      <div className="w-full flex flex-row">
        <div className="w-1/6">
          <UserInfo userInfo={userInfoResponse.data} />
        </div>
        <div className="w-5/6">
          <div className="flex flex-wrap min-h-[146px] justify-center border rounded-xl mx-10 my-5">
            <Suspense fallback={<div className="text-center w-full text-gray-400 flex flex-col justify-center">Loading...</div>}>
              <BookingsList bookingsJson={bookingsJson} userRole={userInfoResponse.data.role} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
