import React from 'react';
import { useSelector } from 'react-redux';
import { noteSelectors } from '../redux/noteSlice';
import Search from './Search';
import NoteArea from './NoteArea';
import Item from './Item';

function Notes() {
  const notes = useSelector(noteSelectors.selectAll);
  const searchText = useSelector((state) => state.notes.searchText);

  return (
    <div>
      <Search />
      <NoteArea />
      {!searchText && notes.map((note) => <Item key={note.id} item={note} />)}
      {notes.map(
        (note) => searchText === note.note && <Item key={note.id} item={note} />
      )}
    </div>
  );
}

export default Notes;
