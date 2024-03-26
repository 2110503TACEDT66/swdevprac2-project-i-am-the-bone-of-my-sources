
export default async function getCampgroundWeather(id: string): Promise<WeatherJsonResponse> {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${id}/weather`);
    if (!response.ok) {
        throw new Error("Failed to fetch Campground Weather");
    }

    return await response.json();
}
