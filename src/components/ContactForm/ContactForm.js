import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import { Box, TextField } from "@mui/material";
import SubmitFormButton from "components/SubmitFormButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    name === "name" ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  function verifyDuplication() {
    return contacts.some((contact) => contact.name === name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verifyDuplication()) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    resetState();
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        required
        fullWidth
        autoComplete="given-name"
        name="name"
        id="given-name"
        label="Name"
        margin="normal"
        value={name}
        onChange={handleInputChange}
        inputProps={{
          inputMode: "text",
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title:
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer",
        }}
      />

      <TextField
        required
        fullWidth
        autoComplete="given-number"
        inputProps={{
          inputMode: "tel",
        }}
        name="number"
        value={number}
        onChange={handleInputChange}
        id="given-number"
        label="Number"
        margin="normal"
      />

      <SubmitFormButton>Add contact</SubmitFormButton>
    </Box>
  );
}
