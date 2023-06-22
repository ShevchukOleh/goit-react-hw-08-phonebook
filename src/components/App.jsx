import { useDispatch } from "react-redux";
import { ContactsView } from "./ContactsView";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { Route, Routes} from "react-router-dom";
import RegisterView from "./RegisterView";
import LoginView from "./LoginView";
import { Layout } from "./Layout";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
      <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<ContactsView/>} /> */}
        <Route path="/contacts" element={<PrivateRoute component={<ContactsView/>} redirectTo="/login" />} />
        <Route path="/login" element={<PublicRoute component={LoginView} redirectTo="/contacts" />} />
        <Route path="/register" element={<PublicRoute component={RegisterView} redirectTo="/contacts" />} />
      </Route>
      </Routes>
  );
};

export default App;
