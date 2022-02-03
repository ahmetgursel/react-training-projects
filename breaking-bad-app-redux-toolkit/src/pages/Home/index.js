import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCharacters } from '../../redux/charactersSlice';

function Home() {
  const data = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  console.log(data);

  return <div>Homee</div>;
}

export default Home;
