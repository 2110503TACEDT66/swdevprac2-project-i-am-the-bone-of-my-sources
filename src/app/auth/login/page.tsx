'use client'
import { signIn, useSession } from "next-auth/react";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const LogInPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const session = useSession();
  if (session.data?.user) {
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const response = await signIn("signin", {
      email: data.get("Email") as string,
      password: data.get("Password") as string,
      redirect: false,
    });

    if (response?.ok) {
      // router.push("/");
      // router.refresh();
    } else {
      setError(response?.error + " " + response?.status);
    }
  };

  return (
    <main className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <Image src="/img/login_bg.jpg" alt="login_bg" layout="fill" style={{ opacity: 1, objectFit: "cover", zIndex: -1 }} />
      <div className="relative w-[25rem] flex items-center justify-center p-10 rounded-lg overflow-hidden bg-[rgba(40,37,29,0.7)]">
        <div className="relative w-[20rem] h-fit flex flex-col gap-3 justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="logo"
              fill
              style={{ objectFit: "cover", borderRadius: "50%", padding: "0rem 3rem" }}
              className="!relative"
            />
          </Link>
          <h1 className="text-white font-bold">👋Hi! <span className="text-orange-400">Welcom back</span> Traveller🏕️</h1>
          {error && <Alert severity="error">{error}</Alert>}
          <div className="bg-white p-6 rounded-lg">
            <form action={""} onSubmit={async (e) => { await handleSubmit(e) }}>
              <FormControl>
                <TextField variant="standard" name="Email" label="Email" required ></TextField>
                <TextField variant="standard" name="Password" label="Password" type="password" required ></TextField>
                <Button variant="outlined" className="mt-10" type="submit">Login</Button>
              </FormControl>
              <div className="mt-5 text-center text-sm">still don't have acc → <Link style={{ color: "#1976d2", textDecoration: "underline" }} href="/auth/register">Register</Link> </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LogInPage;