import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("acctoken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing local storage, etc.
    // Then redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Home
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "100vh",
        }}
      >
        <h1>Welcome to the Home Page</h1>
        {/* Add other content or components for the home page */}
      </div>
    </div>
  );
};

export default Home;
