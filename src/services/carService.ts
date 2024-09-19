import {apiService} from "./apiService";
import {urls} from "../constans";
import {ICars} from "../interfaces/carInterface";
import {IRes} from "../types";

const carService = {
    getAll: (): IRes<ICars> => apiService.get(urls.car.base),
}

export {
    carService
}