import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { PlacesSortingName } from '../../const';
import { selectPlacesSorting } from '../../store/sorting/sorting.selectors';
import { sortPlaces } from '../../store/sorting/sorting-slice';
import ClickAwayListener from 'react-click-away-listener';
import clsx from 'clsx';

const PlacesSorting = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const placeSorting = useSelector(selectPlacesSorting);

  const dispatch = useAppDispatch();

  const handleSelectSorting = (sortBy: PlacesSortingName) => {
    dispatch(sortPlaces(sortBy));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        {placeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen ? (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <ul className="places__options places__options--custom places__options--opened">
            {Object.values(PlacesSortingName).map((sortBy) => (
              <li
                className={clsx(
                  'places__option',
                  placeSorting === sortBy && 'places__option--active'
                )}
                key={sortBy}
                tabIndex={0}
                onClick={() => handleSelectSorting(sortBy)}
              >
                {sortBy}
              </li>
            ))}
          </ul>
        </ClickAwayListener>
      ) : (
        ''
      )}
    </form>
  );
};

export default PlacesSorting;
