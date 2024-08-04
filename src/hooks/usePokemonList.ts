import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

type Results = {
  name: string;
  url: string;
};

type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
};

const usePokemonList = () => {
  const [pageUrl, setPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  );

  const fetchPokemonList = (url: string) => {
    return axios.get<PokemonList>(url).then((response) => response.data);
  };

  const query = useQuery<PokemonList, Error>({
    queryKey: ['pokemonList', pageUrl],
    queryFn: () => fetchPokemonList(pageUrl),
    keepPreviousData: true,
  });
  const goToNextPage = () => {
    if (query.data?.next) {
      setPageUrl(query.data.next);
    }
  };

  const goToPreviousPage = () => {
    if (query.data?.previous) {
      setPageUrl(query.data.previous);
    }
  };

  return {
    ...query,
    goToNextPage,
    goToPreviousPage,
  };
};

export default usePokemonList;
