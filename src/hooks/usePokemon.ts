import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  moves: { move: { name: string } }[];
};

const usePokemon = (name: string | undefined) => {
  const fetchPokemonDetails = async () => {
    return await axios
      .get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/' + name)
      .then((response) => response.data);
  };

  return useQuery<PokemonDetails, Error>({
    queryKey: ['pokemon', name],
    queryFn: fetchPokemonDetails,
    keepPreviousData: true,
  });
};

export default usePokemon;
