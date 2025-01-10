import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES } from '../../const';
import { CityState } from '../../lib/types/store';

const initialState: CityState = {
  activeCity: CITIES[0],
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<string>) => {
      state.activeCity =
        CITIES.find((city) => city.name === action.payload) || CITIES[0];
    },
  },
});

export const { selectCity } = citySlice.actions;

export default citySlice.reducer;
