import { Route, Routes } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Header from "components/Header";
import Container from "components/Container";
import "./App.css";

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
    <div className="App">
      <Container>
        {isFetchingCurrentUser ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Header />
            <Suspense fallback={<div>Loading</div>}>
              <Routes>
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
      </Container>
    </div>
  );
}

export default App;
