import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { PokemonDetails } from './components/PokemonDetails';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  { path: '/:name', element: <PokemonDetails /> },
]);

export default router;
