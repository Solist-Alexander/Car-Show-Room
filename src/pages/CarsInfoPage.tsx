import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {useParams} from "react-router-dom";
import {carActions} from "../store/slices/carSlice";
import CarsDetails from "../components/СarsContainer/CarsDetails/CarsDetails";

const CarsInfoPage = () => {
    const {carDetails} = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch();
    const {carId} = useParams();

    useEffect(() => {
        dispatch(carActions.getCarDetails(+carId))
    }, [carId])
    return (
        <div>
            {carDetails && <CarsDetails carDetails={carDetails}/>}
        </div>
    );
};

export default CarsInfoPage;