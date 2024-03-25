export default function UserInfo({ userInfo }: { userInfo: any }) {
  return (
    <div className="w-full h-fit flex flex-col text-left justify-center border rounded-xl mx-4 my-5">
      <br />
      <h1 className="mx-4 font-bold">
        Account Information
      </h1>
      <p className="mx-4">
        Name: {userInfo.name}
      </p>
      <p className="mx-4">
        Email: {userInfo.email}
      </p>
      <p className="mx-4">
        Tel: {userInfo.tel}
      </p>
      {userInfo.role === "admin" ?
        <p className="mx-4">
          Role: {userInfo.role}
        </p>
        : null
      }
      <br />
    </div>
  );
}
