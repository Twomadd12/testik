import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state) => {
      const newItem = {
        id: Date.now(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
      state.items = [newItem, ...state.items];
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
