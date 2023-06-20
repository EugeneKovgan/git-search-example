import { useState } from 'react';
import { useActions } from '../hooks/actions';
import { IRepo } from '../models/models';
import { useAppSelector } from '../hooks/redux';

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);

  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setIsFavorite(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setIsFavorite(false);
  };

  return (
    <div className='border py-3 px-5 rounded-sm mb-2 hover:shadow-gray-100'>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>
        <h2 className='text-lg'>{repo.full_name}</h2>
        <p className='text-cm'> Forks: {repo.forks}</p>
        {!isFavorite && (
          <button onClick={addToFavorite} className='py-2 px-4 mr-2 rounded bg-yellow-300'>
            add
          </button>
        )}
        {isFavorite && (
          <button onClick={removeFromFavorite} className='py-2 px-4 rounded bg-red-300'>
            remove
          </button>
        )}
      </a>
    </div>
  );
};
