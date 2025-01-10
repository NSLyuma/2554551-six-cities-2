import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseStatus } from '../../const';
import { FavoritesState } from '../../lib/types/store';
import { changeFavoriteStatus, getFavorites } from '../api-actions';
import { OfferPartial } from '../../lib/types/offer';

const initialState: FavoritesState = {
  favorites: [],
  favoritesResponseStatus: ResponseStatus.Idle,
  favoriteResponseStatus: ResponseStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFavorites.pending, (state) => {
        state.favorites = [];
        state.favoritesResponseStatus = ResponseStatus.Pending;
      })
      .addCase(
        getFavorites.fulfilled,
        (state, action: PayloadAction<OfferPartial[]>) => {
          state.favorites = action.payload;
          state.favoritesResponseStatus = ResponseStatus.Success;
        }
      )
      .addCase(getFavorites.rejected, (state) => {
        state.favorites = [];
        state.favoritesResponseStatus = ResponseStatus.Error;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.favoriteResponseStatus = ResponseStatus.Pending;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state) => {
        state.favoriteResponseStatus = ResponseStatus.Success;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.favoriteResponseStatus = ResponseStatus.Error;
      }),
});

export default favoritesSlice.reducer;
