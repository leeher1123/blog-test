import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    }
  },
});

const { setUser } = slice.actions;
export const actions = {
  setUser,
};

export default slice.reducer;
