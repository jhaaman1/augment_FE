import { Box, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchBox() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code here to perform search on form submit
  };

  return (
    <Box marginLeft={'28rem'}>
      <FormControl>
        <Input
          type="text"
          border={"2px solid"}
          w="60%"
          h="70px"
          borderRadius={'5rem'}
          value={`${location} ${checkIn} ${checkOut} ${guests}`}
          onChange={(event) => setLocation(event.target.value)}
       
        />
      </FormControl>
    </Box>
  );
}

export default SearchBox;
