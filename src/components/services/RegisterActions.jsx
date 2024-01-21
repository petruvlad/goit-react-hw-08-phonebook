import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerAsync } from '../api'; 

export const registerAsyncAction = createAsyncThunk(
  'register/registerAsync',
  async (key, thunkAPI) => {
    try {
      const response = await registerAsync(key);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
