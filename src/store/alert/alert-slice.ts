import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertState } from '../../lib/types/store';

const initialState: AlertState = {
  isShown: false,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<string>) => {
      state.isShown = true;
      state.message = action.payload;
    },

    clearAlert: (state) => {
      state.isShown = false;
      state.message = '';
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
