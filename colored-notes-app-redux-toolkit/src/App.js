import { useSelector } from 'react-redux';
import { noteSelectors } from './redux/noteSlice';
import './App.css';
import Notes from './components/index';
import React from 'react';

function App() {
  const notes = useSelector(noteSelectors.selectAll);
  console.log(notes);
  return (
    <div
      className='App'
      style={{
        backgroundColor: '#EAEAEA',
        height: '100vh',
      }}
    >
      <h1 style={{ color: '#AEAEAA' }}>NotesApp</h1>
      <Notes />
    </div>
  );
}

export default App;
