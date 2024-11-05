"use server";
import {FC} from "react";
import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Header: FC = () => {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BEBRASTORE
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
