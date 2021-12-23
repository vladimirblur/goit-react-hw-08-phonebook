import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function PasswordInputField({ error }) {
  return (
    <TextField
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="new-password"
      inputProps={{
        inputMode: "text",
        pattern: "(?=^.{6,}$).*$",
        title: "Minimum 6 numbers required and one lowercase characters .",
      }}
      error={Boolean(error)}
    />
  );
}

PasswordInputField.propTypes = {
  error: PropTypes.string,
};
