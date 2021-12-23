import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "redux/contacts";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import AddContactPageIcon from "@mui/icons-material/ContactPage";
import ContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";

import Section from "components/Section";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import FormTitle from "components/FormTitle";

export default function ContactsView() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const handleFilterChange = () => {
    return (e) => dispatch(contactsActions.filterChange(e.target.value));
  };

  return (
    <Section>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 5,
          }}
        >
          <FormTitle
            title="New contact"
            icon={AddContactPageIcon}
            titleComponent="h2"
          />
          <ContactForm />

          <FormTitle icon={ContactsOutlinedIcon} title={"Contacts"} />
          <Filter filter={filter} onFilterChange={handleFilterChange()} />
          <ContactList />
        </Box>
      </Container>
    </Section>
  );
}
