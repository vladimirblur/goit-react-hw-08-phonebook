import { Route, Routes } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Header from "components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#01579b",
    },
  },
});

const HomeView = lazy(() =>
  import("pages/HomeView" /* webpackChunkName: "home-page"*/)
);

const ContactsView = lazy(() =>
  import("pages/ContactsView" /* webpackChunkName: "contacts-page"*/)
);
const SignUpView = lazy(() =>
  import("pages/SignUpView" /* webpackChunkName: "sign-up-page"*/)
);
const LoginView = lazy(() =>
  import("pages/LoginView" /* webpackChunkName: "login-page"*/)
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <Box component="main">
          {isFetchingCurrentUser ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <Suspense fallback={<div>Loading</div>}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PublicRoute>
                        <HomeView />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <PublicRoute restricted>
                        <SignUpView />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <PublicRoute redirectTo="/contacts" restricted>
                        <LoginView />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/contacts"
                    element={
                      <PrivateRoute redirectTo="/login">
                        <ContactsView />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </>
          )}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
