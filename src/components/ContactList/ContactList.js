import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  List,
  ListItemText,
  ListItem,
  Button,
  Typography,
} from "@mui/material";
import { contactsSelectors, contactsOperations } from "redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);

  return (
    <>
      {contacts.length > 0 && (
        <List sx={{ width: "100%" }}>
          {visibleContacts.map(({ name, id, number }) => (
            <ListItem key={id}>
              <ListItemText primary={name} secondary={number} />
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}

      {contacts.length === 0 && (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Contact list empty
        </Typography>
      )}
    </>
  );
}
