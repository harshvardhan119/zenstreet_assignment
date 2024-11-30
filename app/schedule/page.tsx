"use client"
import { useState } from "react";
import { MdLocationOn, MdHome, MdVideoCall, MdCall } from "react-icons/md";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import BasicDateCalendar from "@/components/Calendar";
import { useRouter } from 'next/navigation'


export default function TherapyBooking() {
  const [selectedMode, setSelectedMode] = useState("in-person");
  const [selectedFilter, setSelectedFilter] = useState("Slots");
  const [selectedSlot, setSelectedSlot] = useState(null);
  

  const modes = [
    { label: "In-person", value: "in-person", icon: <MdHome size={24} /> },
    { label: "Video", value: "video", icon: <MdVideoCall size={24} /> },
    { label: "Call", value: "call", icon: <MdCall size={24} /> },
  ];

  const slots = {
    morning: ["8:00 - 8:45 AM", "9:00 - 9:45 AM", "11:00 - 11:45 AM"],
    afternoon: ["12:00 - 12:45 PM", "2:00 - 2:45 PM", "3:00 - 3:45 PM", "4:00 - 4:45 PM"],
    evening: ["5:00 - 5:45 PM", "6:00 - 6:45 PM", "7:00 - 7:45 PM", "8:00 - 8:45 PM"],
  };

  const dates = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    isAvailable: i % 3 === 0,
  }));
  const router =useRouter();
  const navigateTobooked = () => {
    router.push('/booked'); 
  };


  return (
    <div className="p-6 bg-white min-h-screen ">
      <h2 className="text-xl text-black font-bold mb-4 lg:ml-[600px]">Please select therapy mode</h2>
      
      {/* Therapy Modes */}
      <div className="flex gap-4 mb-6 lg:ml-[550px]">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => setSelectedMode(mode.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border  ${
              selectedMode === mode.value
                ? "bg-blue-500 text-white "
                : "bg-white text-black "
            }`}
          >
            {mode.icon}
            {mode.label}
          </button>
        ))}
      </div>

      {/* Address */}
      <div className="flex items-center text-black mb-6 lg:ml-[600px]">
        <MdLocationOn size={20} className="mr-2" />
        3rd Floor, A2, 35, Block A2, Delhi
      </div>
        
      {/* Filters */}
      <div className="flex mb-6 lg:ml-[640px]">
        <ToggleButtonGroup
          value={selectedFilter}
          exclusive
          onChange={(_, value) => value && setSelectedFilter(value)}
          
        >
          <ToggleButton value="Slots" className="px-6 py-2 mr-5 " style={{borderRadius:"12px",}}>
            Slots
          </ToggleButton>
          <ToggleButton value="Date" className="px-6 py-2" style={{borderRadius:"12px",}}>
            Date
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      
      {/* Slots */}
      {selectedFilter === "Slots" && (
        <div className="grid gap-6 text-black lg:ml-[450px] flex">
          {Object.entries(slots).map(([time, slotList]) => (
            <div key={time}>
              <h4 className="text-lg font-medium capitalize mb-2 ">{time}</h4>
              <div className="flex gap-4 flex-wrap" >
                {slotList.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "contained" : "outlined"}
                    color={selectedSlot === slot ? "primary" : "default"}
                    onClick={() => setSelectedSlot(slot)}
                    style={{borderRadius:"20px"}}>
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      
      {selectedFilter === "Date" && (
       <div
       style={{
         width: "500px",         
         color: "black",        
         fontSize: "20px",     
         border: "2px solid #ccc", 
         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
         borderRadius: "10px",   
         padding: "20px",       
         backgroundColor: "white",
       }}
       className="lg:ml-[500px] lg:w-[900px}" 
     >
       <BasicDateCalendar />
     </div>
      )}

                  <Button style={{marginLeft:"620px",marginTop:"60px",backgroundColor:" #0085D0",color:"white",width:"200px",borderRadius:"20px"}} onClick={navigateTobooked}>
                    Proceed
                  </Button>
    </div>
  );
}
