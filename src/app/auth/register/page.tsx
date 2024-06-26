'use client'
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { Alert, Button, CircularProgress, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const LogInPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const router = useRouter();
  const session = useSession();
  if (session.data?.user) {
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    setPending(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const response = await signIn("signup", {
      email: data.get("Email") as string,
      password: data.get("Password") as string,
      name: data.get("Name") as string,
      tel: data.get("Telephone") as string,
      redirect: false,
    });

    setPending(false);
    if (response?.error == 'success') {
      // router.push("/");
      // router.refresh();
      setSucess('Success');
      setError(null);

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } else {
      setSucess(null);
      setError(response?.status + " " + response?.error);
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
          <h1 className="text-white font-bold">👋Hello! Traveller🏕️</h1>
          {error && <Alert severity="error">{error}</Alert>}
          {sucess && <Alert severity="success">{sucess}</Alert>}
          <div className="bg-white p-6 rounded-lg">
            <form action={""} onSubmit={async (e) => { await handleSubmit(e) }}>
              <FormControl>
                <TextField variant="standard" name="Name" label="Name" type="text" required ></TextField>
                <TextField variant="standard" name="Telephone" label="Telephone" type="tel" required ></TextField>
                <TextField variant="standard" name="Email" label="Email" required ></TextField>
                <TextField variant="standard" name="Password" label="Password" type="password" required ></TextField>
                <Button variant="outlined" className="mt-10" type="submit">
                  Become a Traveller
                  {pending && <CircularProgress className="p-2 ml-4" />}
                </Button>
              </FormControl>
              <div className="mt-5 text-center text-sm">already have acc → <Link style={{ color: "#1976d2", textDecoration: "underline" }} href="/auth/login">Login</Link> </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LogInPage;