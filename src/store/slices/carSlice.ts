import {AxiosError} from "axios";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    carDetails: ICar | null;
    products: ICar[];
    filteredCars: ICar[];
}

const initialState: IState = {
    carDetails: null,
    products: [],
    filteredCars: [],
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await carService.getAll();
            return data.products;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data || "Ошибка загрузки данных");
        }
    }
);

const getCarDetails = createAsyncThunk<ICar, number>(
    'carSlice/getCarDetails',
    async (id, thunkAPI) => {
        try {
            const {data} = await carService.getById(id)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const filterCars = (state: IState, action: PayloadAction<any>) => {
    const filters = action.payload;
    const filtered = state.products.filter((car) => {
        return (
            (!filters.priceMin || car.price >= filters.priceMin) &&
            (!filters.priceMax || car.price <= filters.priceMax) &&
            (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
            (!filters.ratingMin || car.rating >= filters.ratingMin)
        );
    });
    state.filteredCars = filtered;
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        filterCars,
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.products = action.payload;
                state.filteredCars = action.payload;
            })
            .addCase(getCarDetails.fulfilled, (state, action) => {
                state.carDetails = action.payload
            }),

});

const { reducer: carReducer, actions } = carSlice;

const carActions = {
    ...actions,
    getAll,
    getCarDetails
};

export {
    carReducer,
    carActions
};
