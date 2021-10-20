import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'shared',
  initialState: {
    blog: []
  },
  reducers: {
    setBlog: (state, {payload}) => {
      state.blog = payload;
    }
  },
});

const { setBlog } = slice.actions;
export const actions = {
  setBlog,
};

export default slice.reducer;
