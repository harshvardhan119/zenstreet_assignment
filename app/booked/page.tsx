"use client"
import { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function BookingForm() {
  const [isReferred, setIsReferred] = useState(false);
  const router =useRouter();
  const navigateToconfirmed = () => {
    router.push('/confirmed'); 
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center ">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6  ">
        {/* Header Section */}
        <div className="bg-blue-500 text-white rounded-t-lg px-4 py-2 flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <div>
              <p className="text-sm font-medium">Sat, 06 Aug</p>
              <p className="text-sm">3:30 PM - 4:20 PM</p>
            </div>
          </div>
          <p className="text-xl font-bold">₹ 2,400/-</p>
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            size="small"
          />

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md px-3 py-2 w-fit">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="w-6 h-4 mr-2"
              />
              <span className="text-gray-700 font-medium">+91</span>
            </div>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <p className="text-sm text-gray-500">
            i. You will receive booking details on <span className="font-medium text-gray-600">WhatsApp</span>
          </p>

          {/* Employer Referral Section */}
          <div className="mt-4">
            <p className="font-medium text-gray-700">
              Have you been referred by your employer?
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Checkbox
                checked={isReferred}
                onChange={(e) => setIsReferred(e.target.checked)}
                color="primary"
              />
              <span className="text-black">Yes, I am employed under a partnering company</span>
            </div>
            {isReferred && (
              <div className="flex items-center gap-4 mt-4">
                <TextField
                  label={`"Partnering Company Name" or "Company ID"`}
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <Button variant="contained" color="primary">
                  Verify
                </Button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isReferred}
            className="mt-6"
            onClick={navigateToconfirmed}>
            Book session
          </Button>
        </div>
      </div>
    </div>
  );
}
