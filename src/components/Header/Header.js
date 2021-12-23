import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { AppBar, Container, Toolbar } from "@mui/material";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexDirection: {
              xs: isLoggedIn ? "row" : "row-reverse",
              md: "row",
            },
          }}
        >
          <Navigation isLoggedIn={isLoggedIn} />

          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
