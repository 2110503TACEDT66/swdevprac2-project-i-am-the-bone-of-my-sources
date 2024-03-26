const userRegister = async (userEmail: string, userPassword: string, userName: string, userTel: string):Promise<UserRegister> => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
      name: userName,
      tel: userTel,
      role: 'user'
    }),
  })
  
  // console.log(response);
  // console.log(await response.json());
  if (!response.ok) {
    throw new Error(await response.json().then((data) => data.message));
  } else {
    throw new Error('success');
  }
  
  return response.json();
};


export default userRegister;