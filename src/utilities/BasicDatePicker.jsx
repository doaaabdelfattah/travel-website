import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); // Update the state when the date changes
    console.log(newDate); // Optionally log the selected date to the console
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose Date"
        autoFocus={false}
        value={selectedDate} // Bind the selected date to the state
        onChange={handleDateChange} // C
        format="DD/MM/YYYY" // Custom date format
        disablePast
        className="py-6 px-10 rounded-full bg-slate-100/60 text-black outline-none text-3xl transition duration-300 ease-in-out cursor-pointer"
        slotProps={{
          textField: {
            sx: {
              "& .MuiInputBase-root": {
                border: "none", // Remove the border
                boxShadow: "none", // Remove the shadow
                "&:focus": {
                  border: "none", // Remove focus border
                  boxShadow: "none", // Remove focus box-shadow
                },
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
