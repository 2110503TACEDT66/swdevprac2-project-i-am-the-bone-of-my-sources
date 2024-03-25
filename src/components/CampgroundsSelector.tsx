import { MenuItem, Select } from "@mui/material";

export default function CampgroundsSelector() {
  return (
    <Select className="mx-2 h-16" variant="standard" >
      <MenuItem value={"Campground_1"}>Campground_1</MenuItem>
    </Select>
  );
}
