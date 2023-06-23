import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { ButtonContainer, Container, Form, Link, RegistrationContainer, Section, Text, TextContainer, Title } from './LoginView.styled';
import { Button, TextField } from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section>
      <RegistrationContainer>
        <Container>
          <Title>Registration</Title>

          <Form onSubmit={handleSubmit} autoComplete="off">
            <TextField style={{marginBottom: 20}}
              fullWidth
              type="text"
              name="name"
              id="standard-basic" 
              label="Name" 
              variant="standard" 
              value={name}
              onChange={handleChange}
            />

            <TextField style={{marginBottom: 20}}
              fullWidth
              type="email"
              name="email"
              id="standard-basic" 
              label="Email" 
              variant="standard" 
              value={email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              type="password"
              name="password"
              id="outlined-password-input" 
              label="Password" 
              variant="standard" 
              value={password}
              onChange={handleChange}
            />

            <ButtonContainer>
              <Button type='submit' variant="contained">Sign In</Button>
            </ButtonContainer>
            <Link onClick={() => {navigate('/login')}}>Already registered? Sign In</Link>
          </Form>
        </Container>
      </RegistrationContainer>
      <TextContainer>
        <Text>PHONE BOOK</Text>
      </TextContainer>
    </Section>
  );
}