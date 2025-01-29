import { TextField, Box, Button } from "@mui/material";

export const Input = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <TextField
        label="Enter text"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button>Check</Button>
    </Box>
  );
};
