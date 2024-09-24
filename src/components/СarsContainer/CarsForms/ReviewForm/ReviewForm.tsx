import { IReview } from "../../../../interfaces/carInterface";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { carValidator } from "../../../../validators/carValidator";
import {FC} from "react";
import style from './ReviewForm.module.css'

interface IProps {
    onAddReview: (review: IReview) => void;
}

const ReviewForm:FC<IProps> = ({ onAddReview }) => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });

    const onSubmit = (data: any) => {
        const newReview: IReview = {
            rating: data.rating,
            comment: data.comment,
            date: new Date().toISOString(),
            reviewerName: data.reviewerName,
            reviewerEmail: '',
        };
        onAddReview(newReview);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.divCarForm}>
            <label>Name:<input type="text" {...register('reviewerName')}/></label> <br/>
            <label>Rating (1-5):<input type="number" {...register('rating')}/></label> <br/>
            <label>Comment:<textarea{...register('comment')}/></label> <br/>

            <button type="submit" disabled={!isValid}>Post a review</button><br/>
            {errors.reviewerName && <span>{errors.reviewerName?.message as string}</span>}
            {errors.rating && <span>{errors.rating?.message as string}</span>}
            {errors.comment && <span>{errors.comment?.message as string}</span>}
        </form>
    );
};

export default ReviewForm;
