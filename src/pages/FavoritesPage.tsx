import { useAppSelector } from '../hooks/redux';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useAppSelector((state) => state.github);
  return (
    <div>
      <ul>
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target='_blank'>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
