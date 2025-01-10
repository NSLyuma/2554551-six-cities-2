import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus, CityName } from '../../const';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { selectCity } from '../../store/city/city-slice';
import HeaderLayout from '../../components/header-layout/header-layout';
import LoginForm from '../../components/login-form/login-form';

const Login = () => {
  const cities = Object.keys(CityName);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  const authorizationStatus = useSelector(selectAuthorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectCity = () => {
    dispatch(selectCity(randomCity));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <HeaderLayout />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={handleSelectCity}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
