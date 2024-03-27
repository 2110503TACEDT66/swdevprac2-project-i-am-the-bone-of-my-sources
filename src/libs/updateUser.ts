export default async function updateUser(token: any, user: any) {
    console.log(user);
    const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/auth/user`,
        {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: user.name,
                tel: user.tel,
                email: user.email,
                picture: user.picture,
                password: user.password?.length < 5 ? undefined : user.password,
            }),
        }
    );
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
    return response.json();
}
