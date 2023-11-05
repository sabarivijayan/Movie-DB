// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import "./header.css";

function Header() {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
                fontWeight: 800,
                fontSize: "30px",
                marginLeft: "-109px",
              }}
              component={Link}
              to="/home"
              color="inherit"
              className="logo"
            >
              Movie DB
            </Typography>
            <Button color="inherit" component={Link} to="/new">
              New Releases
            </Button>
            <Button color="inherit" component={Link} to="/hot">
              What's Hot
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;