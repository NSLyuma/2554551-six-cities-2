import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { selectCity, getOffers, selectOffer, sortPlaces } from './actions';
import { StoreState } from '../lib/types/store';
import { CITIES, PlacesSortingName } from '../const';
import { OFFERS } from '../mocks/offers';
import { SingleOffer } from '../lib/types/offer';

const initialState: StoreState = {
  activeCity: CITIES[0],
  offerList: OFFERS,
  selectedOffer: undefined,
  placesSorting: PlacesSortingName.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action: PayloadAction<string>) => {
      state.activeCity =
        CITIES.find((city) => city.name === action.payload) || CITIES[0];
    })
    .addCase(getOffers, (state, action: PayloadAction<SingleOffer[]>) => {
      state.offerList = action.payload;
    })
    .addCase(
      selectOffer,
      (state, action: PayloadAction<SingleOffer | undefined>) => {
        state.selectedOffer = action.payload;
      }
    )
    .addCase(sortPlaces, (state, action: PayloadAction<PlacesSortingName>) => {
      state.placesSorting = action.payload;
    });
});
