import { TextField, Box, Button, Typography } from "@mui/material";
import {checkPalindrome} from "../PalindromeCheck";
import { useState } from "react";

export const Input = () => {
    const [input, setInput] = useState(''); // State für den Input-Wert
    const [isPalindrome, setIsPalindrome] = useState<boolean>(null);

  const handleCheck = () => { // pass input to check function
      const result = checkPalindrome(input);
      setIsPalindrome(result);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
      
      {isPalindrome !== null && (
        <Typography sx={{ mt: 2, fontWeight: "bold" }}>
          {isPalindrome ? "Yep, it's a palindrome!" : "No, it's not a palindrome!"}
        </Typography>
      )}

      <TextField
        label="Enter text"
        id="input"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <Button
      variant="contained"
      sx={{ mt: 2 }}
      onClick={handleCheck}
      >
        Check
        </Button>
    </Box>
  );
};
