import { useSelector } from 'react-redux';
import { Header, Title } from './Navigation.styled';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Header>
            <Link to="/" style={{textDecoration: 'none', color: 'black', marginRight: 'auto'}}>
                <Title>Phonebook</Title>
            </Link>
            {isLoggedIn && <UserMenu/>}
        </Header>
    )
}