import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import { Button } from "@mui/material";
import s from "./UserMenu.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
      contrastText: "#f3e5f5",
    },
    secondary: {
      main: "#f44336",
      contrastText: "#f3e5f5",
    },
  },
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <ThemeProvider theme={theme}>
        <span className={s.name}>{`Welcome ${name}`}</span>

        <Button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log out
        </Button>
      </ThemeProvider>
    </div>
  );
}
