import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function SubmitFormButton({ children }) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {children}
    </Button>
  );
}

SubmitFormButton.propTypes = {
  children: PropTypes.node.isRequired,
};
