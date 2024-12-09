import { store } from '../../store';
import { City } from './city';
import { SingleOffer } from './offer';

export type StoreState = { activeCity: City; offerList: SingleOffer[] };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
