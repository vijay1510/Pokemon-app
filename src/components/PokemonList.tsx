import usePokemonList from '../hooks/usePokemonList';

export const PokemonList = () => {
  const { data, isLoading, error, goToNextPage, goToPreviousPage } =
    usePokemonList();

  if (isLoading) return <h1>loading....</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <h1 className='mt-4 mb-8  text-red-600 text-3xl text-center'>
        Pokemon List
      </h1>
      <div className='flex flex-row flex-wrap'>
        {data.results.map((pokemon) => (
          <div className='basis-1/4 p-5' key={pokemon.name}>
            {pokemon.name}
          </div>
        ))}
      </div>
      <div className='text-center mt-10'>
        <button
          onClick={goToPreviousPage}
          disabled={data.previous === null}
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700  mr-5 disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={data.next === null}
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700  mr-5 disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    </>
  );
};
