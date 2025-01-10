import { configureStore } from '@reduxjs/toolkit';
import { AppDispatch } from '../lib/types/store';
import { useDispatch } from 'react-redux';
import { createApi } from '../services/api';
import userSlice from './user/user-slice';
import offersSlice from './offers/offers-slice';
import commentsSlice from './comments/comments-slice';
import nearPlacesSlice from './near-places/near-places-slice';
import citySlice from './city/city-slice';
import sortingSlice from './sorting/sorting-slice';
import favoritesSlice from './favorites/favorites-slice';
import alertSlice from './alert/alert-slice';

export const api = createApi();

export const store = configureStore({
  reducer: {
    user: userSlice,
    offers: offersSlice,
    comments: commentsSlice,
    nearPlaces: nearPlacesSlice,
    city: citySlice,
    sorting: sortingSlice,
    favorites: favoritesSlice,
    alert: alertSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }),
});

export const useAppDispatch: () => AppDispatch = useDispatch;
