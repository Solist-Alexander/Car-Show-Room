import {apiService} from "./apiService";
import {urls} from "../constans";
import {IApiResponse, ICar} from "../interfaces/carInterface";
import {IRes} from "../types";

const carService = {
    getAll: (): IRes<IApiResponse> => apiService.get(urls.car.base),
    getById:(id:number): IRes<ICar> => apiService.get(urls.car.byId(id)),
}

export {
    carService
}