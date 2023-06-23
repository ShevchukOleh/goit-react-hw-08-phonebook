import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { ButtonContainer, Container, Form, Link, LogInContainer, Section, Text, TextContainer, Title } from './LoginView.styled';
import { Button, TextField, } from '@mui/material';

export default function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Section>
      <LogInContainer>
        <Container>
          <Title>Log In</Title>

          <Form onSubmit={handleSubmit} autoComplete="off">
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
              <Button type='submit' variant="contained">Log In</Button>
            </ButtonContainer>

            <Link onClick={() => {navigate('/register')}}>Don't have an account? Sign Up</Link>

          </Form>
        </Container>
      </LogInContainer>
      <TextContainer>
        <Text>PHONE BOOK</Text>
      </TextContainer>
    </Section>
  );
}