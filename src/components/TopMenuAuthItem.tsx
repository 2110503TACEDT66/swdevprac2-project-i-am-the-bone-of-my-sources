'use client';
import { signOut, useSession } from "next-auth/react"
import TopMenuItem from "./TopMenuItem"

const TopMenuAuthItem = () => {
  const session = useSession();
  return (
    <>
      {session.data ?
        <>
          <div onClick={() => { signOut() }}>
            <TopMenuItem href="" text="Logout" className="font-extrabold p-4 rounded-lg bg-black hover:bg-white hover:text-black" />
          </div>
        </>
        : <>
          <TopMenuItem href="/auth/login" text="Login" />
          <TopMenuItem href="" text="Sign-up" className="font-extrabold p-4 rounded-lg bg-black hover:bg-white hover:text-black" />
        </>
      }
    </>
  );
};

export default TopMenuAuthItem;