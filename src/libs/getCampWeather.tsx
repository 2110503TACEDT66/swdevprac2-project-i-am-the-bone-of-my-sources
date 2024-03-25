
export default async function getCampgroundWeather(id: string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${id}/weather`);
    if (!response.ok) {
        throw new Error("Failed to fetch Campground");
    }

    return await response.json();
}