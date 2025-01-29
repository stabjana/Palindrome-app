import { TextField, Box, Button } from "@mui/material";

export const Input = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 2 }}>
      <TextField
        label="Enter text"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button
      variant="contained"
      sx={{ mt: 2 }}
      //onClick={bla}
      >
        Check
        </Button>
    </Box>
  );
};
