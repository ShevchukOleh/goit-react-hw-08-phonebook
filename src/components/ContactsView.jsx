import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import { Filter } from './Filter/Filter';

export const ContactsView = () => {
  return (
    <div style={{padding: "5px 20px"}}>
      <h1>Phonebook</h1>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}