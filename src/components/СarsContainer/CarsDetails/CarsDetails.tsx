import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";

interface IProps extends PropsWithChildren {
    carDetails: ICar
}
const CarsDetails: FC<IProps> = ({carDetails}) => {
    const {id, title, images} = carDetails
    return (
        <div>
            {title}
        </div>
    );
};

export default CarsDetails;