import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Center, Box } from '@chakra-ui/react';
import { searchText } from '../../redux/noteSlice';

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(searchText(value));
  }, [value]);

  return (
    <>
      <Center>
        <Box p={6}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Search...'
            size='lg'
            width='250px'
            bg='white'
            boxShadow='lg'
          />
        </Box>
      </Center>
    </>
  );
}

export default Search;
