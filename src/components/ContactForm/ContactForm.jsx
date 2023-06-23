import {Form} from './ContactForm.styled'
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from "react-redux";
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;

        const contact = {
            name: form.elements.name.value,
            number: form.elements.number.value,
        }

        dispatch(addContact(contact));
        
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextField style={{marginBottom: 20}}
              fullWidth
              type="text"
              name="name"
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              required
            />
            <TextField style={{marginBottom: 20}}
              fullWidth
              type="tel"
              name="number"
              id="outlined-basic" 
              label="Number" 
              variant="outlined" 
              required
            />
            <Button type='submit' variant="contained">Add contact</Button>
        </Form>
    )
}

export default ContactForm;