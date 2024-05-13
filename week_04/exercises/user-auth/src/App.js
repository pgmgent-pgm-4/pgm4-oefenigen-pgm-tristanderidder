import './App.css';
import { Welcome, Login } from './pages';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { UserProvider } from './context/User';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path={ROUTES.welcome.path} element={<Welcome />} />
    <Route path={ROUTES.login.path} element={<Login />} />
  </Route>
))

function App() {
    return (
      <UserProvider>
        <RouterProvider router={router} />;
      </UserProvider>
    );
}

export default App;
