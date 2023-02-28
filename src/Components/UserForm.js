import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";

const UserForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    fetch("http://localhost:3000/addnewuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address }),
    })
      .then(() => {
        setIsPending(false);
        setIsSuccess(true);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
        setIsError(true);
        setIsSuccess(false);
      });

    setName("");
    setAddress("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "150px", height: '250px'}}>
      <form
        method="POST"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "10px",
            padding: "20px",
        }}
      >
        <Typography
          variant="h8"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          ADD NEW USER
        </Typography>
        <Box sx={{ "& > :not(style)": { m: 1 }, marginBottom: "25px" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Name"
              value={name}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LocationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Address"
              value={address}
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
        </Box>
        {!isPending && (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        )}
        {isPending && (
          <Button type="submit" variant="contained" color="primary" disabled>
            Adding User...
          </Button>
        )}
        {isSuccess && (
          <Box sx={{ color: "green", marginTop: "1rem" }}>
            User added successfully!
          </Box>
        )}
        {isError && (
          <Box sx={{ color: "red", marginTop: "1rem" }}>Error adding user!</Box>
        )}
      </form>
    </Box>
  );
};

export default UserForm;
