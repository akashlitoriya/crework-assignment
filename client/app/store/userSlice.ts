// store/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  token: string;
}

const initialState: ExampleState = {
  token: localStorage.getItem('token') || '',
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setToken:(state, action: PayloadAction<string>) => {
      state.token = action.payload;
      
    }
  },
});

export const { setToken } = exampleSlice.actions;

export default exampleSlice.reducer;
