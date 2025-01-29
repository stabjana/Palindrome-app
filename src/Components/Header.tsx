import { Typography, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ textAlign: "center", mt: 4, mb: 2 }}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Palindrome Checker
      </Typography>
    </Box>
  );
}

export default Header;
