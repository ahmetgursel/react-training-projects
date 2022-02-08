import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';
import React from 'react';
import Form from './Form';
import List from './List';

function Contacts() {
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <>
      <h1>Contacts ({total})</h1>
      <Form />
      <h4>Contacts List</h4>
      <List />
    </>
  );
}

export default Contacts;
