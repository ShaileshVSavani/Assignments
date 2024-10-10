

// import { Button, Box, Typography } from "@mui/material";
// import React, { useState } from "react";


// const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Letters for row labeling (e.g., A, B, C, ...)
//   const rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, totalRows);

//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber)) {
//       const updatedSeats = selectedSeats.includes(seatNumber)
//         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//         : [...selectedSeats, seatNumber]; // Select seat

//       setSelectedSeats(updatedSeats);
//       onSeatSelect(updatedSeats); // Update parent component with selected seats
//     }
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = `${rowLetters[row]}${seat}`; // Format seat number (e.g., A1, B3)

//         seatRow.push(
//           <Button
//             key={seatNumber}
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{
//               margin: "2px",
//               width: "40px", // Smaller width
//               height: "40px", // Smaller height
//               minWidth: "unset", // Remove extra padding
//               backgroundColor: selectedSeats.includes(seatNumber)
//                 ? "green"
//                 : bookedSeats.includes(seatNumber)
//                 ? "red"
//                 : "gray",
//               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
//               color: "white",
//               '&:hover': {
//                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
//               },
//             }}
//             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
//           >
//             {seatNumber}
//           </Button>
//         );
//       }
//       seats.push(
//         <Box key={row} display="flex" justifyContent="center">
//           {seatRow}
//         </Box>
//       );
//     }
//     return seats;
//   };

//   return (
//     <Box>
//       <Typography variant="h6" textAlign="center" mb={2}>
//         Select Your Seats
//       </Typography>
//       {/* Status Indicator */}
//       <Box display="flex" justifyContent="center" mb={2}>
//         <Box display="flex" alignItems="center" mr={2}>
//           <Button disabled sx={{ backgroundColor: "green", width: "20px", height: "20px", marginRight: "4px" }} />
//           <Typography variant="body2">Selected</Typography>
//         </Box>
//         <Box display="flex" alignItems="center" mr={2}>
//           <Button disabled sx={{ backgroundColor: "red", width: "20px", height: "20px", marginRight: "4px" }} />
//           <Typography variant="body2">Booked</Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <Button disabled sx={{ backgroundColor: "gray", width: "20px", height: "20px", marginRight: "4px" }} />
//           <Typography variant="body2">Available</Typography>
//         </Box>
//       </Box>
//       {bookedSeats.length === totalSeats ? (
//         <Typography variant="h6" color="red" textAlign="center">
//           All seats for this show are booked. Please select a different time or date.
//         </Typography>
//       ) : (
//         renderSeats()
//       )}
//     </Box>
//   );
// };

// export default SeatSelection;


//===============


import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

const SeatSelection = ({ bookedSeats, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalSeats = 50;

  useEffect(() => {
    // Whenever selected seats change, send them to the parent component
    onSeatSelect(selectedSeats);
  }, [selectedSeats, onSeatSelect]);

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) {
      toast.error("This seat is already booked!");
      return;
    }

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <Box marginTop={2}>
      <Typography variant="h6" gutterBottom>
        Select Your Seats:
      </Typography>
      <Grid container spacing={1}>
        {[...Array(totalSeats)].map((_, index) => {
          const seatNumber = `A${index + 1}`;

          return (
            <Grid item xs={3} sm={2} md={1} key={seatNumber}>
              <Button
                variant={
                  bookedSeats.includes(seatNumber)
                    ? "contained"
                    : selectedSeats.includes(seatNumber)
                    ? "contained"
                    : "outlined"
                }
                color={
                  bookedSeats.includes(seatNumber)
                    ? "error"
                    : selectedSeats.includes(seatNumber)
                    ? "primary"
                    : "default"
                }
                onClick={() => handleSeatClick(seatNumber)}
                disabled={bookedSeats.includes(seatNumber)}
              >
                {seatNumber}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SeatSelection;

