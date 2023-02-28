import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AdminReminder() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 190,
        right: -60,
        transform: "rotate(45deg)",
        transformOrigin: "top right",
        marginTop: "60px",
        backgroundColor: "yellow",
        border: "2px solid black",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        zIndex: -2,
        overflow: "hidden"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".3rem",
          textDecoration: "none",
        }}
      >
        Admin
      </Typography>
    </Box>
  );
}

export default AdminReminder;
