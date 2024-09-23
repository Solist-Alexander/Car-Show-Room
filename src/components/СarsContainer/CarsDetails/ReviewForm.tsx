import React, { useState } from 'react';
import { IReview } from "../../../interfaces/carInterface";

interface IProps {
    onAddReview: (review: IReview) => void;
}

const ReviewForm: React.FC<IProps> = ({ onAddReview }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewerName, setReviewerName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview: IReview = {
            rating,
            comment,
            date: new Date().toISOString(),
            reviewerName,
            reviewerEmail: '', // Укажите email, если требуется
        };
        onAddReview(newReview);
        setRating(0);
        setComment('');
        setReviewerName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="Your name"
                required
            />
            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                required
            />
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Your review"
                required
            />
            <button type="submit">post a review</button>
        </form>
    );
};

export default ReviewForm;
