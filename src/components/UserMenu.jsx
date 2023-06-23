import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUserEmail } from 'redux/auth/selectors';
import { Text } from './Navigation/Navigation.styled';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div style={styles.container}>
      <Text style={styles.name}>{email}</Text>
      <Button 
        size='small' 
        color='error' 
        type='submit' 
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >Log Out</Button>
    </div>
  );
}