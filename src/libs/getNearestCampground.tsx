
export default async function getNearestCampground(latitude: string, longitude: string, token: string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/nearest?latitude=${latitude}&longitude=${longitude}` ,
    {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch Campground");
    }

    return await response.json();
}