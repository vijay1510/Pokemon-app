import { Link } from 'react-router-dom';
import usePokemonList from '../hooks/usePokemonList';
import { Loader } from './Loader';

export const PokemonList = () => {
  const { data, isLoading, error, goToNextPage, goToPreviousPage } =
    usePokemonList();

  if (isLoading) return <Loader />;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mt-4 mb-8 text-red-600 text-3xl text-center'>
        Pokemon List
      </h1>
      <div className='flex flex-wrap justify-center'>
        {data.results.map((pokemon) => (
          <Link
            to={pokemon.name}
            className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-4 text-center bg-gray-100 m-2 rounded shadow hover:bg-gray-200 transition-all'
            key={pokemon.name}
          >
            <div className='capitalize text-lg font-semibold text-gray-700'>
              {pokemon.name}
            </div>
          </Link>
        ))}
      </div>
      <div className='text-center mt-10'>
        <button
          onClick={goToPreviousPage}
          disabled={data.previous === null}
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 mr-5 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all'
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={data.next === null}
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 mr-5 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all'
        >
          Next
        </button>
      </div>
    </div>
  );
};
