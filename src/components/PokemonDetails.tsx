import { useNavigate, useParams } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';
import { Loader } from './Loader';
import { PokemonNotFound } from './PokemonNotFound';

export const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = usePokemon(name);

  if (isLoading) return <Loader />;

  if (error || !data) return <PokemonNotFound />;

  return (
    <div className='container mx-auto p-4'>
      <div className='max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex items-center'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-64 w-full object-contain mx-auto p-4'
              src={data.sprites.other['official-artwork'].front_default}
              alt={data.name}
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Name
            </div>
            <h1 className='block mt-1 text-2xl leading-tight font-medium text-black'>
              {data.name}
            </h1>
            <p className='mt-2 text-gray-500'>ID: {data.id}</p>
            <p className='mt-2 text-gray-500'>Height: {data.height}</p>
            <p className='mt-2 text-gray-500'>Weight: {data.weight}</p>

            <div className='mt-4'>
              <h2 className='text-lg font-semibold text-gray-900'>Abilities</h2>
              <ul className='list-disc list-inside mt-2 text-gray-500'>
                {data.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold text-gray-900'>Types</h3>
              <ul className='list-disc list-inside mt-2 text-gray-500'>
                {data.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold text-gray-900'>Moves</h3>
              <ul className='list-disc list-inside mt-2 text-gray-500'>
                {data.moves.slice(0, 4).map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-4'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all'
        >
          Back
        </button>
      </div>
    </div>
  );
};
