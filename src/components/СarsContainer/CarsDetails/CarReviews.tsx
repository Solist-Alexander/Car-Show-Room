import React, {FC} from 'react';
import {IReview} from "../../../interfaces/carInterface";
import style from './CarReviews.module.css'

interface IProps {
    review: IReview;
}

const CarReviews: FC<IProps> = ({review}) => {
    const {rating, comment, date, reviewerName} = review;
    return (
        <div className={style.mainDiv}>
            <h2>{reviewerName}</h2>
            <p>Rating: {rating}/5</p>
            <p>Review: {comment}</p>
            <small>{new Date(date).toLocaleDateString()}</small>
        </div>
    );
};

export default CarReviews;