const createCamp = async (campName: string, campAddress: string, picture: string, location: Object, tel: string, token: string) => {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: campName,
        address: campAddress,
        picture: picture,
        location: location,
        tel: tel
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
  
  
  export default createCamp;