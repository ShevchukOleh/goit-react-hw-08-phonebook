import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Button, ButtonContainer, Container, Form, Input, Label, Link, LogInContainer, Section, Text, TextContainer, Title } from './LoginView.styled';

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
            <Label>
              <Input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={handleChange}
              />
            </Label>

            <Label style={{marginBottom: 0}}>
              <Input
                type="password"
                name="password"
                placeholder='Password'
                value={password}
                onChange={handleChange}
              />
            </Label>

            <ButtonContainer>
              <Button type="submit">Log In</Button>
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