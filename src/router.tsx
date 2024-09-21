import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import CarsDetails from "./components/СarsContainer/CarsDetails/CarsDetails";
import CarsPage from "./pages/CarsPage";
import CarsInfoPage from "./pages/CarsInfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars', element: <CarsPage/>
            },
            {
                path: 'cars/:carId', element: <CarsInfoPage/>
            },
        ]
    }

])

export {
    router
}