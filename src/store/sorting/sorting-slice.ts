import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlacesSortingName } from '../../const';
import { SortingState } from '../../lib/types/store';

const initialState: SortingState = {
  placesSorting: PlacesSortingName.Popular,
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    sortPlaces: (state, action: PayloadAction<PlacesSortingName>) => {
      state.placesSorting = action.payload;
    },
  },
});

export const { sortPlaces } = sortingSlice.actions;

export default sortingSlice.reducer;
