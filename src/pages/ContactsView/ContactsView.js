import Container from "components/Container";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

export default function ContactsView() {
  return (
    <Section>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </Section>
  );
}
