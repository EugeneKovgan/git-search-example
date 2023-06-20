import { useEffect, useState } from 'react';
import { useLazyGetUserResponseQuery, useSearchUsersQuery } from '../store/github/github.api';
import { useDebounce } from '../hooks/dabounce';
import { IUser } from '../models/models';
import { RepoCard } from '../components/RepoCard';

export const HomePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const [dropdown, setDropdown] = useState(false);
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debounced, { skip: debounced.length < 3, refetchOnFocus: true });

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserResponseQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0);
  }, [debounced, users]);

  const clickHandler = (userName: string) => {
    fetchRepos(userName);
    setDropdown(false);
  };

  return (
    <div>
      {isError && <p>..something wrong</p>}
      <div className='relative w-[560px]'>
        <input
          type='text'
          className='border py-2 px-4 mb-2'
          placeholder='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
            {isLoading && <p>loading...</p>}
            {users?.map((item) => {
              return (
                <li
                  onClick={() => clickHandler(item.login)}
                  className='py-2 transition-colors cursor-pointer hover:bg-gray-200'
                  key={item.id}
                >
                  {item.login}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div>
        {areReposLoading && <p>...loading</p>}
        {repos?.map((repo) => {
          return <RepoCard repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
};
