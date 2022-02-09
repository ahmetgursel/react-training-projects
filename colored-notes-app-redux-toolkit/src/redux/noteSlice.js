import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const noteAdaptor = createEntityAdapter();
const initialState = noteAdaptor.getInitialState();

export const noteSelectors = noteAdaptor.getSelectors((state) => state.notes);

const noteSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNotes: noteAdaptor.addOne,
  },
});

export const { addNotes } = noteSlice.actions;
export default noteSlice.reducer;
