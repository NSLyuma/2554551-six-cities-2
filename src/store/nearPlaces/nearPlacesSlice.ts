import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NearPlacesState } from '../../lib/types/store';
import { ResponseStatus } from '../../const';
import { changeFavoriteStatus, getNearbyOffers } from '../api-actions';
import { FavoriteStatusChange } from '../../lib/types/favorite';

const initialState: NearPlacesState = {
  nearbyOffers: [],
  nearbyOffersResponseStatus: ResponseStatus.Idle,
};

export const nearPlacesSlice = createSlice({
  name: 'nearPlaces',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getNearbyOffers.pending, (state) => {
        state.nearbyOffers = [];
        state.nearbyOffersResponseStatus = ResponseStatus.Pending;
      })
      .addCase(getNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyOffersResponseStatus = ResponseStatus.Success;
      })
      .addCase(getNearbyOffers.rejected, (state) => {
        state.nearbyOffers = [];
        state.nearbyOffersResponseStatus = ResponseStatus.Error;
      })
      .addCase(
        changeFavoriteStatus.fulfilled,
        (state, action: PayloadAction<FavoriteStatusChange>) => {
          state.nearbyOffers = state.nearbyOffers.map((offer) =>
            offer.id === action.payload.id
              ? { ...offer, isFavorite: action.payload.data.isFavorite }
              : offer
          );
        }
      ),
});

export default nearPlacesSlice.reducer;
