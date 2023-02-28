import "./App.css";
import Navbar from "./Components/Navbar";
import AdminReminder from "./Components/AdminReminder";
import UserForm from "./Components/UserForm";
import HousingForm from "./Components/HousingForm";
import Box from "@mui/material/Box";
import HouseCard from "./Components/HouseCard";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    document.title = "3RE Agency";
    fetch("http://localhost:3000/logements")
      .then((res) => res.json())
      .then((data) => {
        setLogements(data);
      });
  });

  return (
    <div className="App">
      <Navbar />
      <AdminReminder />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <UserForm />
        <HousingForm />
      </Box>
      <Box sx={{display: "flex", width: "100%", justifyContent: "center"}}>
      <Typography
            variant="h6"
            noWrap
            component="a"
            textAlign="center"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: "2rem",
            }}
          >
            OUR HOUSES
          </Typography>
          </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Container maxWidth="m">
          <Grid container spacing={2} alignItems="center">
            {logements.map((logement) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <HouseCard logement={logement} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default App;
