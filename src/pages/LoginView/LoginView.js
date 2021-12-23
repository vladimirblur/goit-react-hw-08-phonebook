import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import Container from "@mui/material/Container";
import Section from "components/Section";
import Copyright from "components/Copyright";
import EmailInputField from "components/EmailInputField";
import PasswordInputField from "components/PasswordInputField";
import FormTitle from "components/FormTitle";
import SubmitFormButton from "components/SubmitFormButton";

export default function LogInView() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    dispatch(authOperations.logIn(credentials));
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
          <FormTitle icon={LockedIcon} title={"Login"} />

          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <EmailInputField error={error} />
              </Grid>

              <Grid item xs={12}>
                <PasswordInputField error={error} />
              </Grid>
            </Grid>

            <SubmitFormButton>Log In</SubmitFormButton>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} variant="body2" to="/register">
                  Don't have an account? Sign up
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
