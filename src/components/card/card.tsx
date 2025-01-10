import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { Link, useNavigate } from 'react-router-dom';
import { CardImgAttributes, CardType } from '../../lib/types/card';
import { OfferPartial } from '../../lib/types/offer';
import { AppRoute, AuthorizationStatus, CARD_OPTIONS } from '../../const';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';
import { selectOfferId } from '../../store/offers/offers-slice';
import { changeFavoriteStatus } from '../../store/api-actions';
import clsx from 'clsx';

type Props = {
  card: OfferPartial;
  cardType: CardType;
  imgAttributes: CardImgAttributes;
};

const Card = ({ card, cardType, imgAttributes }: Props) => {
  const {
    id,
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
  } = card;
  const { cardClass, imgClass } = CARD_OPTIONS[cardType];
  const ratingWidth = Math.round(rating) * 20;

  const authorizationStatus = useSelector(selectAuthorizationStatus);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleUpdateFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(
        changeFavoriteStatus({ offerId: card.id, status: Number(!isFavorite) })
      );
    } else {
      navigate(AppRoute.Login);
    }
  };

  const handleOfferHover = (offerId: string) => {
    dispatch(selectOfferId(offerId));
  };

  return (
    <article
      className={clsx('place-card', cardClass)}
      onMouseOver={() => handleOfferHover(id)}
      onMouseLeave={() => handleOfferHover('')}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className={clsx(imgClass, 'place-card__image-wrapper')}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgAttributes.width}
            height={imgAttributes.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={clsx(
          isFavorite && 'favorites__card-info',
          'place-card__info'
        )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={clsx(
              'place-card__bookmark-button',
              'button',
              isFavorite && 'place-card__bookmark-button--active'
            )}
            type="button"
            onClick={handleUpdateFavoriteStatus}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Card;
