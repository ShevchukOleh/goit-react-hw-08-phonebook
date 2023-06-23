import { useDispatch } from "react-redux";
import { ContactsView } from "./ContactsView";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { Navigate, Route, Routes} from "react-router-dom";
import RegisterView from "./LoginRegistrationView/RegisterView";
import LoginView from "./LoginRegistrationView/LoginView";
import { Layout } from "./Layout";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<PrivateRoute component={<ContactsView/>} redirectTo="/login" />} />
        <Route path="/login" element={<PublicRoute component={LoginView} redirectTo="/contacts"/>} />
        <Route path="/register" element={<PublicRoute component={RegisterView} redirectTo="/contacts"/>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default App;


