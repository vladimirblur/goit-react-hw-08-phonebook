import { Link, Typography } from "@mui/material";
import { Link as HomeLink } from "react-router-dom";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" component={HomeLink} to={process.env.PUBLIC_URL}>
        Phonebook
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
