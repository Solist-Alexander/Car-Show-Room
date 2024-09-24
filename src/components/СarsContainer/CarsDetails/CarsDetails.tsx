import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ICar, IReview } from "../../../interfaces/carInterface";
import CarouselForCar from "../../Bootstrap/carousel";
import style from './CarsDetails.module.css';
import CarReviews from "./CarReviews";
import ReviewForm from "../CarsForms/ReviewForm/ReviewForm";

interface IProps extends PropsWithChildren {
    carDetails: ICar;
}

const CarsDetails: FC<IProps> = ({ carDetails }) => {
    const { id, title, images, price, description, rating, brand, warrantyInformation, shippingInformation, reviews } = carDetails;

    const [ArrReviews, setReviews] = useState<IReview[]>(reviews || []);
    const [StatusButtonReview, setStatusButtonReview] = useState<boolean>(false);

    useEffect(() => {
        const storedReviews = localStorage.getItem(`${title}`);
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        } else {
            setReviews(reviews || []);
        }
    }, [id, title, reviews]);

    const handleAddReview = (newReview: IReview) => {
        const updatedReviews = [...ArrReviews, newReview];
        setReviews(updatedReviews);
        localStorage.setItem(`${title}`, JSON.stringify(updatedReviews));

        setStatusButtonReview(false);
    };

    const toggleButtonText = () => {
        setStatusButtonReview(!StatusButtonReview);
    };

    return (
        <div>
            <div className={style.flexDiv}>
                <div className={style.carousel}>
                    <CarouselForCar images={images} />
                </div>
                <div className={style.details}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Brand: {brand}</p>
                    <p>Warranty: {warrantyInformation}</p>
                    <p>Shipping: {shippingInformation}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div>
                <button onClick={toggleButtonText}>
                    {StatusButtonReview ? 'Close review form' : 'Leave a review'}
                </button>
            </div>

            <div>
                {StatusButtonReview && <ReviewForm onAddReview={handleAddReview} />}
            </div>
            <div>
                {ArrReviews.map((review) => (
                    <CarReviews review={review} key={review.date} />
                ))}
            </div>
        </div>
    );
};

export default CarsDetails;
