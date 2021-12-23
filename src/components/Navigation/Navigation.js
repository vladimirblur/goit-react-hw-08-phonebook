import { NavLink } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";

export default function Navigation({ isLoggedIn }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        flexGrow: 1,
        alignItems: "center",
      }}
      component="nav"
    >
      <List sx={{ display: "flex", flexGrow: isLoggedIn ? 0 : 1 }}>
        <ListItem>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            Home
          </NavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            {" "}
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              Contacts
            </NavLink>
          </ListItem>
        )}
      </List>

      {!isLoggedIn && (
        <List sx={{ display: "flex" }}>
          <ListItem sx={{ width: "auto" }}>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              Sign up
            </NavLink>
          </ListItem>

          <ListItem sx={{ width: "auto" }}>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              Log In
            </NavLink>
          </ListItem>
        </List>
      )}
    </Box>
  );
}
