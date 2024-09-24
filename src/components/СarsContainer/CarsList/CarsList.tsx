import React, { FC } from 'react';
import { ICar } from "../../../interfaces/carInterface";
import CarsListCard from "../CarsListCard/CarsListCard";
import style from "./CarsList.module.css";

interface IProps {
    cars: ICar[];
}

const CarsList: FC<IProps> = ({ cars }) => {
    return (
        <div className={style.mainCarsList}>
            <div className={style.carsListCardDiv}>
                {cars && cars.map(car => <CarsListCard key={car.id} car={car} />)}
            </div>
        </div>
    );
};

export default CarsList;

