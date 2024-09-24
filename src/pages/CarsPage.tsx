import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks";
import CarsList from "../components/СarsContainer/CarsList/CarsList";
import CarFilterForm from "../components/СarsContainer/CarsForms/CarFilterForm/CarFilterForm";
import { carActions } from "../store/slices/carSlice";

const CarsPage = () => {
    const dispatch = useAppDispatch();
    const { filteredCars, products } = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll()); // Загрузка всех машин при монтировании компонента
    }, [dispatch]);

    const handleFilter = (filters: any) => {
        dispatch(carActions.filterCars(filters)); // Экшен для фильтрации
    };

    return (
        <div>
            <CarFilterForm onFilter={handleFilter} />
            {filteredCars.length === 0 ? (
                <div>
                    {products.length === 0 ? (
                        <p>Нет доступных автомобилей.</p>
                    ) : (
                        <p>Нет совпадений по фильтрам.</p>
                    )}
                </div>
            ) : (
                <CarsList cars={filteredCars} />
            )}
        </div>
    );
};

export default CarsPage;


