import { Avatar, Typography } from "@mui/material";

export default function FormTitle({ title, icon: Icon }) {
  return (
    <>
      {Icon && (
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <Icon />
        </Avatar>
      )}
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </>
  );
}
