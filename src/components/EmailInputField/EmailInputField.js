import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function EmailInputField({ autoFocus = false, error }) {
  return (
    <TextField
      autoFocus={autoFocus}
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      inputProps={{
        inputMode: "email",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
        title: "Email is not valid.",
      }}
      error={Boolean(error)}
    />
  );
}

EmailInputField.propTypes = {
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
};
