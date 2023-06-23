import {List, ListItem, Loading, Container } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/thunk';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress } from '@mui/material';

function ContactList() {
  const { items, isLoading } = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  }

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Container>
      <Loading>
        {isLoading && <CircularProgress size={20}/>}
      </Loading>
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <DeleteIcon style={{cursor: 'pointer'}} onClick={() => contactDelete(id)}/>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ContactList;