import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !number.trim()) {
      return false;
    }

    const names = name.split(',');
    const data = names.map((name) => ({
      id: nanoid(),
      name: name.trim(),
      phone_number: number.trim(),
    }));
    dispatch(addContacts(data));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='name'
        />
        <input
          placeholder='phone number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className='btn'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
