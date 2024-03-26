import { FormControl } from "@mui/material"
import Image from "next/image"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile2"
import { authOptions } from "@/libs/authOptions"
import createCamp from "@/libs/createCamp"

export default async function createCampPage() {

    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null

    const addCamp = async (addCampForm:FormData) => {
        'use server'
        const name = addCampForm.get("name")
        const address = addCampForm.get("address")
        const pic = addCampForm.get("picture")
        const latitude = parseFloat(addCampForm.get("latitude") as string)
        const longitude = parseFloat(addCampForm.get("longitude") as string)
        const tel = addCampForm.get("tel")
        const location = {
            type: 'Point',
            coordinates: [latitude, longitude]
        }

        createCamp(name as string, address as string, pic as string, location, tel as string, session.user.token);
    }

    return (
        <main className="w-[100vw] h-[100vh] flex items-center justify-center">
            <form action={addCamp}>
            <FormControl className="bg-white p-6 rounded-lg">
            <div className="text-xl text-blue-700">Create New Campground</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
                    Name
                </label>
                <input type="text" required id="name" name="name" placeholder="Camp's name" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
                    Address
                </label>
                <input type="text" required id="address" name="address" placeholder="Camp's address" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
                    Picture
                </label>
                <input type="text" required id="picture" name="picture" placeholder="URL" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="latitude">
                    Latitude
                </label>
                <input type="number" required id="latitude" name="latitude" placeholder="0" min={-90} max={90} className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="longitude">
                    Longitude
                </label>
                <input type="number" required id="longitude" name="longitude" placeholder="0" min={-180} max={180} className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
                    Telephone Number
                </label>
                <input type="text" required id="tel" name="tel" placeholder="tel." className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Camp</button>
            </FormControl>
            </form>
        </main>
    )
}