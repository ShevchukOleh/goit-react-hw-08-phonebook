import ContactForm from './ContactForm/ContactForm'
import { Container, Section } from './ContactForm/ContactForm.styled';
import ContactList from './ContactList/ContactList'
import { Title } from './ContactList/ContactList.styled';
import { Filter } from './Filter/Filter';

export const ContactsView = () => {
  return (
    <Section>
      <Container>
        <ContactForm/>
        <div>
          <Title>Contacts</Title>
          <Filter/>
          <ContactList/>
        </div>
      </Container>
    </Section>
  );
}