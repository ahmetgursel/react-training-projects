import React from 'react';
import { Center, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteNotes } from '../../redux/noteSlice';

function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteNotes(id));
    }
  };

  return (
    <Center>
      <Box
        as='button'
        borderRadius='md'
        bg={item.color}
        color='white'
        m={2}
        px={4}
        w={40}
        minHeight={10}
        onClick={() => handleDelete(item.id)}
      >
        {item.note}
      </Box>
    </Center>
  );
}

export default Item;
