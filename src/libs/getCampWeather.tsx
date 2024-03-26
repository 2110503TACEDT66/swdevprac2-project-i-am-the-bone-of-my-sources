
export default async function getCampgroundWeather(id: string): Promise<WeatherJsonResponse | null> {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${id}/weather`);
        return await response.json();
    } catch (e) {
        return null;
    }
}
