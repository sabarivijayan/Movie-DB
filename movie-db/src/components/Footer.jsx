// Footer.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <Box bgcolor="primary.main" color="white" p={2}>
        <Container>
          <Typography variant="body2" align="center">
            upGrad Frontend Hackathon
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;