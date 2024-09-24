import React, {FC} from 'react';
import { useForm } from "react-hook-form";
import style from './CarFilterForm.module.css'

interface IFilterForm {
    priceMin?: number;
    priceMax?: number;
    brand?: string;
    ratingMin?: number;
}

interface IProps {
    onFilter: (filters: IFilterForm) => void;
}

const CarFilterForm: FC<IProps> = ({ onFilter }) => {
    const { register, handleSubmit } = useForm<IFilterForm>();

    const onSubmit = (data: IFilterForm) => {
        onFilter(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.filterForm}>
            <label>Price Min:<input type="number" {...register('priceMin')} placeholder="Min Price" /></label>
            <label>Price Max:<input type="number" {...register('priceMax')} placeholder="Max Price" /></label>
            <label>Brand:<input type="text" {...register('brand')} placeholder="Brand" /></label>
            <label>Rating Min:<input type="number" {...register('ratingMin')} placeholder="Min Rating" min="1" max="5" /></label>

            <button type="submit">Filter</button>
        </form>
    );
};

export default CarFilterForm;
