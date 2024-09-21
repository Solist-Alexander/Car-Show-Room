import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import style from './CarsListCard.module.css'
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    car: ICar

}

const CarsListCard: FC<IProps> = ({car}) => {
    const {id, title, images} = car
    const navigate = useNavigate()
    return (
        <div className={style.carsListCard}>
            <button onClick={() => navigate(`/cars/${id}`)}>
            <img className={style.carsPosterImg} src={`${images[0]}`} alt="No poster"/>
            <div className={style.textDiv}>
                {title} <br/>
            </div>
            </button>
        </div>
    );
};

export default CarsListCard;