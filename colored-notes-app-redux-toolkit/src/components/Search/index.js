import { useState } from 'react';
import { Input, Center, Box } from '@chakra-ui/react';

function Search() {
  const [value, setValue] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   console.log('submitted');
  // };

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
