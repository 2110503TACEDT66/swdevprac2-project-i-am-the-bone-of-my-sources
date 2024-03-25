export default async function getUserProfile(token: string) {
    try {
        const response = await fetch(
            `https://presentation-day-1-i-am-the-bone-of-my-sources.vercel.app/api/v1/auth/me`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        if (!response.ok) {
            throw new Error("Unable to fetch user profile");
        }
        return await response.json();
    } catch (e) {
        console.log("Error at getUserProfile(token: string)");
        return null;
    }
}
