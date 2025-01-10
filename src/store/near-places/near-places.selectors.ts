import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../lib/types/store';
import { NEARBY_OFFERS_COUNT } from '../../const';

const getNearbyOffers = (state: RootState) =>
  state.nearPlaces.nearbyOffers.slice(0, NEARBY_OFFERS_COUNT);

export const selectNearbyOffers = createSelector(
  [(state: RootState) => state],
  getNearbyOffers
);
