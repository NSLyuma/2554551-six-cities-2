import { SingleComment } from '../../lib/types/comment';
import { format } from 'date-fns';
import clsx from 'clsx';

type Props = {
  review: SingleComment;
};

const ReviewItem = ({ review }: Props) => {
  const { date, user, rating, comment } = review;
  const ratingWidth = Math.round(rating) * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div
          className={clsx('reviews__avatar-wrapper', 'user__avatar-wrapper')}
        >
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {format(new Date(date), 'MMMM y')}
        </time>
      </div>
    </li>
  );
};

export default ReviewItem;
