import { Link } from 'react-router-dom';
import { HomePage } from '../pages/HomePages';

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center g-[50px] px-5 shadow-md bg-gray-500'>
      <h3>search</h3>

      <span>
        <Link className='mr-2' to='/'>
          Home
        </Link>
        <Link to='/favorites'>Favorites</Link>
      </span>
    </nav>
  );
};
