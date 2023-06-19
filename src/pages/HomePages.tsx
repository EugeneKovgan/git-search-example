import { useSearchUsersQuery } from '../store/github/github.api';

export const HomePage: React.FC = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('eugene');
  console.log(data);
  return <div>HomePage</div>;
};
