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
};

const usePokemon = (name: string | undefined) => {
  const fetchPokemonDetails = () => {
    return axios
      .get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/' + name)
      .then((response) => response.data);
  };

  return useQuery<PokemonDetails, Error>({
    queryKey: ['pokemon', name],
    queryFn: fetchPokemonDetails,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });
};

export default usePokemon;
