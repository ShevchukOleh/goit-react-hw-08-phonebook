import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { Button, ButtonContainer, Container, Form, Input, Label, Link, RegistrationContainer, Section, Text, TextContainer, Title } from './LoginView.styled';

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
            <Label>
              <Input 
                type="text" 
                name="name" 
                placeholder='Name'
                value={name} 
                onChange={handleChange} />
            </Label>

            <Label>
              <Input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={handleChange}
              />
            </Label>

            <Label>
              <Input
                type="password"
                name="password"
                placeholder='Password'
                value={password}
                onChange={handleChange}
              />
            </Label>

            <ButtonContainer>
              <Button type="submit">Sign Up</Button>
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