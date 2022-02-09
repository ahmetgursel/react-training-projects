import React from 'react';
import Search from './Search';
import NoteArea from './NoteArea';

function Notes(props) {
  return (
    <div>
      <Search />
      <NoteArea />
    </div>
  );
}

export default Notes;
