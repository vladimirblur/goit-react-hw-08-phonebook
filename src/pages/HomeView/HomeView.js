import { Box } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FormTitle from "components/FormTitle";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "calc(100vh - 64px)",
      }}
    >
      <FormTitle icon={LocalPhoneOutlinedIcon} title={"Phonebook"} />
    </Box>
  );
}
