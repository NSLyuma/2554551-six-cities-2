import { CardOptions, CardType } from './lib/types/card';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PlacesSortingName {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorites = '/favorite',
}

export enum ResponseStatus {
  Idle,
  Pending,
  Success,
  Error,
}

export enum FavoriteStatus {
  RemoveFromFavorites = 0,
  AddToFavorites = 1,
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const OFFER_IMAGES_COUNT = 6;

export const NEARBY_OFFERS_COUNT = 3;

export const REVIEWS_MAX_COUNT = 10;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const CARD_OPTIONS: Record<CardType, Record<CardOptions, string>> = {
  offer: {
    listClass: 'cities__places-list tabs__content',
    cardClass: 'cities__card',
    imgClass: 'cities__image-wrapper',
  },
  near: {
    listClass: 'near-places__list',
    cardClass: 'near-places__card',
    imgClass: 'near-places__image-wrapper',
  },
  favorite: {
    listClass: '',
    cardClass: 'favorites__card',
    imgClass: 'favorites__image-wrapper',
  },
};

export const CITIES = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];
