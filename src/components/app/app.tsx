/* eslint-disable arrow-body-style */
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { SingleOffer } from '../../lib/types/offer';
import { City } from '../../lib/types/city';
import { SingleReview } from '../../lib/types/review';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type Props = {
  favorites: SingleOffer[];
  reviews: SingleReview[];
  cityList: City[];
};

const App = ({ favorites, reviews, cityList }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main cityList={cityList} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer reviews={reviews} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
