import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HouseIcon from "@mui/icons-material/House";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import KeyIcon from "@mui/icons-material/Key";
import StraightenIcon from "@mui/icons-material/Straighten";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const UserForm = () => {
  const [ownerName, setOwnerName] = useState("");
  const [type, setType] = useState("");
  const [livableSurface, setLivableSurface] = useState("");
  const [livingState, setLivingState] = useState("");
  const [objective, setObjective] = useState("");
  const [disponibility, setDisponibility] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [address, setAddress] = useState("");
  const [personId, setPersonId] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch("http://localhost:3000/addnewhousing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ownerName,
        type,
        livableSurface,
        livingState,
        objective,
        disponibility,
        numberOfRooms,
        address,
        personId,
      }),
    })
      .then(() => {
        console.log(disponibility);
        setIsPending(false);
        setIsSuccess(true);
        setIsError(false);
      })
      .catch((err) => {
        console.log(disponibility);
        console.log(err);
        setIsPending(false);
        setIsError(true);
        setIsSuccess(false);
      });

    setOwnerName("");
    setType("");
    setLivableSurface("");
    setLivingState("");
    setObjective("");
    setDisponibility("");
    setNumberOfRooms("");
    setAddress("");
    setPersonId("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
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
          }}
        >
          ADD NEW HOUSING
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "line" }}>
          <Box sx={{ "& > :not(style)": { m: 1 }, marginBottom: "25px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Owner Name"
                value={ownerName}
                variant="standard"
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <HouseIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Type"
                value={type}
                variant="standard"
                onChange={(e) => setType(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <StraightenIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Livable Surface"
                value={livableSurface}
                variant="standard"
                onChange={(e) => setLivableSurface(e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1 }, marginBottom: "25px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CheckCircleIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="Living State"
                value={livingState}
                variant="standard"
                onChange={(e) => setLivingState(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Objective"
                value={objective}
                variant="standard"
                onChange={(e) => setObjective(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Person Id"
                value={personId}
                variant="standard"
                onChange={(e) => setPersonId(e.target.value)}
              />
            </Box>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1 }, marginBottom: "25px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <BedroomChildIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="Number Of Rooms"
                value={numberOfRooms}
                variant="standard"
                onChange={(e) => setNumberOfRooms(e.target.value)}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                paddingTop: "10px",
              }}
            >
              <EventAvailableIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  minDate={dayjs()}
                  label="Disponibility"
                  value={disponibility}
                  onChange={(e) => {
                    const formattedDate = dayjs(e).format("YYYY-MM-DD");
                    setDisponibility(formattedDate);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} error={false} size="small" />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        {!isPending && (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        )}
        {isPending && (
          <Button type="submit" variant="contained" color="primary" disabled>
            Adding House...
          </Button>
        )}
        {isSuccess && (
          <Box sx={{ color: "green", marginTop: "1rem" }}>
            Housing added successfully!
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
