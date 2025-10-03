import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'system',
  fontScale: 1,
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setFontScale(state, action) {
      state.fontScale = action.payload;
    }
  }
});

export const { setTheme, setFontScale } = preferencesSlice.actions;
export default preferencesSlice.reducer;

