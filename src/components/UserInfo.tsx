export default function UserInfo({ userInfo }: { userInfo: Object }) {
  return (
    <div className="w-full h-fit flex flex-col text-left justify-center border rounded-xl mx-4 my-5">
      <br />
      <p className="mx-4">
        Name: {userInfo.name}
      </p>
      <p className="mx-4">
        Email: {userInfo.email}
      </p>
      <p className="mx-4">
        Tel: {userInfo.tel}
      </p>
      <p className="mx-4">
        Role: {userInfo.role}
      </p>
      <br />
    </div>
  );
}
