import "./App.css";
import Navbar from "./Components/Navbar";
import AdminReminder from "./Components/AdminReminder";
import UserForm from "./Components/UserForm";
import HousingForm from "./Components/HousingForm";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AdminReminder />
      <Box sx={{display: "flex", justifyContent: "space-around"}}>
        <UserForm />
        <HousingForm />
      </Box>
    </div>
  );
};

export default App;
