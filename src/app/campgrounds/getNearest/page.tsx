'use client'
import getNearestCampground from "@/libs/getNearestCampground";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const nearestCampPage = () => {

    const router = useRouter();

    const onSearch = async (location:FormData)=> {
        const Camp = await getNearestCampground(location.get("latitude") as string, location.get("longitude") as string)
        router.push(`/campgrounds/${Camp.data.id}`)
    }

    return (
      <main className="h-[100vh] w-[100vw] flex justify-center items-center bg-[rgba(23,35,48,255)]">
        <div className="w-[20rem] flex flex-col gap-3 justify-center items-center">
          <Image
            src="/compass.png"
            alt="logo"
            fill
            style={{ objectFit: "contain", borderRadius: "50%", padding: "0rem 3rem" }}
            className="!relative"
          />
          <h1 className="text-white font-bold">Search for your nearest camp!</h1>
          <div>
            <form action={onSearch}>
              <FormControl className="bg-white p-6 rounded-lg">
                <TextField variant="standard" name="latitude" label="latitude" required ></TextField>
                <TextField variant="standard" name="longitude" label="longitude" required ></TextField>
                <Button variant="outlined" className="mt-10" type="submit">Search</Button>
              </FormControl>
            </form>
          </div>
        </div>
      </main>
    );
}
export default nearestCampPage