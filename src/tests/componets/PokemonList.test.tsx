import { it, expect, describe } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { PokemonList } from '../../components/PokemonList';
import '@testing-library/jest-dom/vitest';

import AllProviders from './AllProviders';

describe('PokemonList', () => {
  it('should rendre heading', async () => {
    render(<PokemonList />, { wrapper: AllProviders });

    //const heading = screen.queryByRole('heading', { name: /loading/i });
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    screen.debug();
  });
});
