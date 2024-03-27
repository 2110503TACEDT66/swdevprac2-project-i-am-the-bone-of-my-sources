'use client';
import updateUser from "@/libs/updateUser";
import { FormControl } from "@mui/base";
import { Alert, Button, CircularProgress, Input, TextField } from "@mui/material";
import { count } from "console";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { use, useState } from "react";

const UserPage = () => {
  const user = useSession().data?.user;
  if (user == null) {
    redirect("/auth/login");
  }
  const [name, setName] = useState<string>(user.name);
  const [tel, setTel] = useState<string>(user.tel);
  const [email, setEmail] = useState<string>(user.email);
  const [picture, setPicture] = useState<string>(user.picture);
  const [password, setPassword] = useState<string>("************");

  const [isEditing, setIsEditing] = useState<boolean>(false);
  let _count = 0;
  const [editPassword, setEditPassword] = useState<boolean>(false);

  const handleButton = () => {
    _count++;
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (_count < 1) return;
    setError(null);
    setPending(true);
    const data = new FormData(e.currentTarget);
    const response = await signIn('updateUser', {
      name: data.get("Name") as string,
      tel: data.get("Telephone") as string,
      email: email as string,
      picture: data.get("ProfileImg (URL)") as string,
      password: data.get("Password") as string,
      token: user.token as string,
      redirect: false,
    });

    setPending(false);
    if (response?.ok) {
      // router.push("/");
      // router.refresh();
      setSucess('Success');
      setError(null);
    } else {
      setSucess(null);
      setError(response?.status + " " + response?.error);
    }
  };

  const handleEditPassword = () => {
    setEditPassword(!editPassword);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => { setTel(e.target.value); }
  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPicture(e.target.value); }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }

  // status handling
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  return (
    <main className="h-[100vh] w-[100vw] pt-16 flex justify-center items-center bg-slate-800">
      <div className="flex flex-col justify-center items-center">
        <div className="-translate-y-16 -translate-x-20 self-start">
          <h1 className="text-4xl font-bold text-white">Profile Management</h1>
          <p className="text-white">This is where you will update your profile👊</p>
        </div>
        <div className="mt-5 flex items-center gap-10">
          <div>
            <img className="!w-[200px] !h-[200px]" src={picture} alt="User" style={{ borderRadius: "50%", objectFit: "cover" }} width={200} height={200} />
          </div>
          <div>
            {error && <Alert severity="error">{error}</Alert>}
            {sucess && <Alert severity="success">{sucess}</Alert>}
            <form className="mt-4" action={""} onSubmit={async (e) => { await handleSubmit(e) }}>
              <FormControl className="w-[20rem] flex flex-col bg-white p-5 rounded-lg">
                <TextField className="relative" variant="standard" name="Name" label="Name" type="text" disabled={!isEditing} value={name} onChange={handleNameChange}><Button className="absolute text-xl">✏️</Button></TextField>
                <TextField variant="standard" name="Telephone" label="Telephone" disabled={!isEditing} type="tel" value={tel} onChange={handleTelChange}></TextField>
                <TextField variant="standard" name="ProfileImg (URL)" label="ProfileImg (URL)" type="text" disabled={!isEditing} value={picture} onChange={handlePictureChange}></TextField>
                <TextField variant="standard" name="Email" label="Email" disabled value={email} ></TextField>
                {
                  isEditing &&
                  <>
                    <TextField variant="standard" name="Password" label="Password" disabled={!editPassword} type="password" value={password} onChange={handlePasswordChange} ></TextField>
                    <span className="cursor-pointer text-sm text-blue-800 hover:underline" onClick={handleEditPassword}>Edit password?</span>
                  </>
                }
                <Button variant="outlined" className="mt-10" type={isEditing ? "submit" : "button"} onClick={handleButton}>
                  {isEditing ? 'UPDATE📤' : 'EDIT📝'}
                  {pending && <CircularProgress className="p-2 ml-4" />}
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;