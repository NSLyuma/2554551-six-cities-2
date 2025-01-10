import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectActiveCity } from '../../store/city/city.selectors';
import { selectCity } from '../../store/city/city-slice';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import clsx from 'clsx';

type Props = {
  city: string;
};

const City = ({ city }: Props) => {
  const activeCity = useSelector(selectActiveCity);

  const dispatch = useAppDispatch();

  return (
    <li className="locations__item" onClick={() => dispatch(selectCity(city))}>
      <Link
        className={clsx(
          'locations__item-link',
          'tabs__item',
          activeCity.name === city && 'tabs__item--active'
        )}
        to={AppRoute.Main}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
};

export default City;
