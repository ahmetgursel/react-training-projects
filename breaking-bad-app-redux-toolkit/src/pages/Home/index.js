import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { fetchCharacters } from '../../redux/charactersSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import './index.css';

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Characters</h1>

      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <img
              alt={character.name}
              src={character.img}
              className='character'
            />
            <div className='char_name'>{character.name}</div>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: '20px 0 40px 0', textAlign: 'center' }}>
        {isLoading && <Loading />}
        {hasNextPage && !isLoading && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage}){' '}
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </div>
  );
}

export default Home;
