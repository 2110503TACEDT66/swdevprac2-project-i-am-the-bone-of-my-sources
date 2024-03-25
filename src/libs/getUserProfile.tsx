export default async function getUserProfile(token: string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        console.log(await response.json());
        throw new Error("Failed to user profile");
    }

    return await response.json();
}
