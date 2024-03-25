export default async function getUserProfile(token: any) {
    try {
        const response = await fetch(
            `${process.env.BACKEND_URL}/api/v1/auth/me`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            console.log(await response.json());
            throw new Error("Unable to fetch user profile");
        }
        return await response.json();
    } catch (e) {
        console.log("Error at getUserProfile(token: any)");
        return null;
    }
}
