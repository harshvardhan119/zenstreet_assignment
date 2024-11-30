"use client"

import { useRouter } from 'next/navigation'
import React from "react";
import { Button } from "@mui/material";

export default function BookingConfirmed() {
    
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
        <p className="text-gray-600">
          Congratulations! Your therapy session has been successfully scheduled.
          We're looking forward to helping you on your journey to better mental health.
        </p>

        {/* Instructions */}
        <div className="mt-8 text-left">
          <p className="text-sm text-gray-500 italic mb-2">i. Instructions</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              A confirmation email with all the session details has been sent to{" "}
              <span className="text-blue-500 font-medium">amal123@gmail.com</span>
            </li>
            <li>
              If this is your first session, consider jotting down any key points or
              questions you want to discuss.
            </li>
          </ul>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ backgroundColor: "#2196F3" }}
            onClick={() => window.location.href = "/"}
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
