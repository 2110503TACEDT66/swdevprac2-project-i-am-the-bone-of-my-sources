'use client'
import { signIn, useSession } from "next-auth/react";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <main className="h-[100vh] w-[100vw] flex justify-center items-center bg-[rgba(23,35,48,255)]">
      <div className="w-[20rem] flex flex-col gap-3 justify-center items-center">
        <Image
          src="/logo.jpg"
          alt="logo"
          fill
          style={{ objectFit: "contain", borderRadius: "50%", padding: "0rem 3rem" }}
          className="!relative"
        />
        <h1 className="text-white font-bold">Hello! Traveller</h1>
        {error && <Alert severity="error">{error}</Alert>}
        <div>
          <form action={""} onSubmit={async (e) => { await handleSubmit(e) }}>
            <FormControl className="bg-white p-6 rounded-lg">
              <TextField variant="standard" name="Email" label="Email" required ></TextField>
              <TextField variant="standard" name="Password" label="Password" type="password" required ></TextField>
              <Button variant="outlined" className="mt-10" type="submit">Login</Button>
            </FormControl>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LogInPage;