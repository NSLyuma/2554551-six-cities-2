import { SingleComment } from '../../lib/types/comment';
import ReviewItem from '../review-item/review-item';

type Props = { reviews: SingleComment[] };

const ReviewList = ({ reviews }: Props) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);

export default ReviewList;
