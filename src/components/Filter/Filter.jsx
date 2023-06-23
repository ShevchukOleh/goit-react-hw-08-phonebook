import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { Container } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const search = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <Container>
      <TextField
        fullWidth
        id="filled-search"
        label="Find contacts by name"
        type="search"
        variant="filled"
        name="filter"
        onChange={search}
      />
    </Container>
  );
};