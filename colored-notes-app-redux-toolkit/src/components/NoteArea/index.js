import { useState } from 'react';
import {
  Center,
  Box,
  Circle,
  Button,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import { CheckIcon, AddIcon } from '@chakra-ui/icons';

function NoteArea() {
  const [note, setNote] = useState('');
  const [color, setColor] = useState('blue');

  return (
    <>
      <Center m={6}>
        <Box bg='white' rounded='lg'>
          <Textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            focusBorderColor='blue.500'
            resize={'none'}
            border={'none'}
            width='600px'
            height='200px'
            placeholder='Enter Your Note Here...'
          />

          <Box display={'flex'}>
            <Box p={2}>
              <Circle bg='blue.500' size='10' onClick={() => setColor('blue')}>
                {color === 'blue' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='yellow.500'
                size='10'
                onClick={() => setColor('yellow')}
              >
                {color === 'yellow' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='purple.500'
                size='10'
                onClick={() => setColor('purple')}
              >
                {color === 'purple' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='green.500'
                size='10'
                onClick={() => setColor('green')}
              >
                {color === 'green' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle bg='red.500' size='10' onClick={() => setColor('red')}>
                {color === 'red' && <CheckIcon />}
              </Circle>
            </Box>
            <Spacer />
            <Box p={2}>
              <Button
                leftIcon={<AddIcon />}
                colorScheme='green'
                variant='solid'
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default NoteArea;
