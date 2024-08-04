import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md text-center'>
        <h1 className='text-4xl font-bold text-red-600 mb-4'>404</h1>
        <p className='text-lg text-gray-700 mb-4'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to='/'>
          <button className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all'>
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
