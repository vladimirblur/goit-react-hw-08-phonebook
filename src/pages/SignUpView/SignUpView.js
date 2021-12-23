import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import Container from "@mui/material/Container";
import Copyright from "components/Copyright";
import EmailInputField from "components/EmailInputField";
import NameInputField from "components/NameInputField";
import PasswordInputField from "components/PasswordInputField";
import FormTitle from "components/FormTitle";
import SubmitFormButton from "components/SubmitFormButton";
import Section from "components/Section";

export default function SignUpView() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const credentials = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(authOperations.signUp(credentials));
  };

  return (
    <Section>
      <Container maxWidth="xs">
        <Box
          sx={{
            mb: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormTitle icon={LockedIcon} title={"Sign up"} />

          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <NameInputField autoFocus />
              </Grid>

              <Grid item xs={12}>
                <EmailInputField error={error} />
              </Grid>

              <Grid item xs={12}>
                <PasswordInputField error={error} />
              </Grid>
            </Grid>

            <SubmitFormButton>Sign Up</SubmitFormButton>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} variant="body2" to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Copyright />
      </Container>
    </Section>
  );
}
