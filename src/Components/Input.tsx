import { TextField, Box, Button, Typography } from "@mui/material";
import {checkPalindrome} from "../PalindromeCheck";
import { useState } from "react";

export const Input = () => {
    const [input, setInput] = useState(''); 
    const [isPalindrome, setIsPalindrome] = useState<boolean>(null);

  const handleCheck = () => {
      const result = checkPalindrome(input); // passing input value to check function
      setIsPalindrome(result);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        p: 3,
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(255, 190, 11, 0.5)",
        maxWidth: 450,
        mx: "auto",
      }}
    >
      
      {isPalindrome !== null && (
        <Typography sx={{ 
            m: 2, fontWeight: "bold",
            fontStyle: "italic", 
            color: "#fff"
            }}>
          {isPalindrome ? "Yep, it's a palindrome!" : "No, it's not a palindrome!"}
        </Typography>
      )}

      <TextField
        label="Enter text"
        id="input"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400,
            bgcolor: "#fff", 
            input: { color: "#333" }, 
            label: { color: "#333" } }}
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
       <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#3a86ff",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": { bgcolor: "#ff006e" },
        }}
        onClick={handleCheck}
      >
        Check
      </Button>
    </Box>
  );
};
