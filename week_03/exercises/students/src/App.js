import './App.css';
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, Detail, NotFound } from './pages';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<NotFound />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.detail.path} element={<Detail />} />
  </Route>
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
