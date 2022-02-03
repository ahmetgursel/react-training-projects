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
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error message={error}></Error>;
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
    </div>
  );
}

export default Home;
