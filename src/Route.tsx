import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { Pokemon } from './components/Pokemon';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  { path: '/:id', element: <Pokemon /> },
]);

export default router;
