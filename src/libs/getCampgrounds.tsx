export default async function getCampgrounds() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds`, {cache: "no-store"});
    if (!response.ok) {
        throw new Error("Failed to fetch campgrounds");
    }

    return await response.json();
}