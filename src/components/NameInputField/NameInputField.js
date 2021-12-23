import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function NameInputField({ autoFocus = false }) {
  return (
    <TextField
      autoComplete="given-name"
      name="name"
      required
      fullWidth
      id="input-name"
      label="Name"
      autoFocus={autoFocus}
      inputProps={{
        inputMode: "text",
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: "Name may contain only letters, apostrophe, dash and spaces.",
      }}
    />
  );
}

NameInputField.propTypes = {
  autoFocus: PropTypes.bool,
};
