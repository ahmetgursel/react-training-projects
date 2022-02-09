import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const noteAdaptor = createEntityAdapter();
const initialState = noteAdaptor.getInitialState();

export const noteSelectors = noteAdaptor.getSelectors((state) => state.notes);

const noteSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNotes: noteAdaptor.addOne,
    deleteNotes: noteAdaptor.removeOne,
    searchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNotes, searchText, deleteNotes } = noteSlice.actions;
export default noteSlice.reducer;
