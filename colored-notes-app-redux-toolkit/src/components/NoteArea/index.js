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
import { useDispatch } from 'react-redux';
import { addNotes } from '../../redux/noteSlice';
import { nanoid } from '@reduxjs/toolkit';

function NoteArea() {
  const dispatch = useDispatch();
  const [note, setNote] = useState('');
  const [color, setColor] = useState('blue.500');

  const handleButton = (e) => {
    e.preventDefault();

    if (!note.trim()) {
      return false;
    }

    dispatch(
      addNotes({
        id: nanoid(),
        note: note.trim(),
        color: color,
      })
    );
    setNote('');
    setColor('blue.500');
  };

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
              <Circle
                bg='blue.500'
                size='10'
                onClick={() => setColor('blue.500')}
              >
                {color === 'blue.500' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='yellow.500'
                size='10'
                onClick={() => setColor('yellow.500')}
              >
                {color === 'yellow.500' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='purple.500'
                size='10'
                onClick={() => setColor('purple.500')}
              >
                {color === 'purple.500' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='green.500'
                size='10'
                onClick={() => setColor('green.500')}
              >
                {color === 'green.500' && <CheckIcon />}
              </Circle>
            </Box>

            <Box p={2}>
              <Circle
                bg='red.500'
                size='10'
                onClick={() => setColor('red.500')}
              >
                {color === 'red.500' && <CheckIcon />}
              </Circle>
            </Box>
            <Spacer />
            <Box p={2}>
              <Button
                leftIcon={<AddIcon />}
                colorScheme='green'
                variant='solid'
                onClick={handleButton}
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
