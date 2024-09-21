import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {carActions} from "../../../store/slices/carSlice";
import CarsListCard from "../CarsListCard/CarsListCard";
import style from "./CarsList.module.css";

const CarsList = () => {
    const { products } = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])


    return (
        <div className={style.mainCarsList}>
                <div className={style.carsListCardDiv}>
                    {products && products.map(car => <CarsListCard key={car.id} car={car}/>)}
                </div>
        </div>
    );
};

export default CarsList;