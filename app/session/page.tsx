"use client"

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useRouter } from 'next/navigation'

interface Session {
  type: string;
  basePrice: number;
  details: string[];
}

const sessions: Session[] = [
  {
    type: "Group Therapy",
    basePrice: 3200,
    details: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    type: "Individual Therapy",
    basePrice: 3200,
    details: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    type: "Couple Therapy",
    basePrice: 3200,
    details: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
];

const durationMultipliers: { [key: string]: number } = {
  "45 min": 1,
  "60 min": 2,
  "90 min": 3,
};

const Session= () => {
  const [selectedDurations, setSelectedDurations] = useState<string[]>(
    Array(sessions.length).fill("60 min")
  );

  const handleDurationChange = (
    index: number,
    newDuration: string | null
  ) => {
    if (newDuration) {
      const updatedDurations = [...selectedDurations];
      updatedDurations[index] = newDuration;
      setSelectedDurations(updatedDurations);
    }
  };

  const router =useRouter();
  const navigateToschedule = () => {
    router.push('/schedule'); 
  };





  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh",color:'black' }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Available sessions
      </Typography>
      <Typography
        variant="body1"
        sx={{
          backgroundColor: "#e3f2fd",
          padding: "0.75rem",
          borderRadius: "8px",
          marginBottom: "2rem",
          textAlign: "center",
          display: "inline-block",
          
        }}
        className="lg:ml-[500px]"
      >
        <span role="img" aria-label="info">
          ℹ️
        </span>{" "}
        Click on the duration to see the pricing details
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {sessions.map((session, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              padding: "1.5rem",
              background:
                "linear-gradient(to bottom, #007bff, #1f9fe6)",
              borderRadius: "16px",
              boxShadow: 3,
              color: "#fff",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              ₹
              {(
                session.basePrice *
                durationMultipliers[selectedDurations[index]]
              ).toFixed(0)}{" "}
              <span style={{ fontSize: "1rem" }}>/ session</span>
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={selectedDurations[index]}
              exclusive
              onChange={(_, newDuration) =>
                handleDurationChange(index, newDuration)
              }
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius:"20px",
                marginBottom: "1rem",
                "& .MuiToggleButton-root": {
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius:"20px",
                },
                "& .Mui-selected": {
                  
                 color:"blue-500",
                  borderColor: "white",
                  borderRadius:"20px",
                },
              }}
            >
              <ToggleButton value="45 min" className="mr-2 h-10">45 min</ToggleButton>
              <ToggleButton value="60 min " className="mr-2 h-10">60 min</ToggleButton>
              <ToggleButton value="90 min" className="mr-2 h-10">90 min</ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}
            >
              {session.type}
            </Typography>
            <Box sx={{ marginBottom: "1.5rem" }}>
              {session.details.map((detail, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ marginBottom: "0.25rem", textAlign: "center" }}
                >
                  • {detail}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              
              sx={{
                backgroundColor: "#fff",
                color: "#1f9fe6",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: 3,
                width:160,
                marginLeft:"3rem"
              }}
              onClick={navigateToschedule}
            >
              Proceed
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Session;
