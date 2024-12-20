import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../lib/types/store';

const getNearbyOffers = (state: RootState) => state.nearPlaces.nearbyOffers;

export const selectNearbyOffers = createSelector(
  [(state: RootState) => state],
  getNearbyOffers
);