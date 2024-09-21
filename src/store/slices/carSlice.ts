import {AxiosError} from "axios";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


interface IState {
    carDetails: ICar,
    products: ICar[];
}

const initialState: IState = {
    carDetails: null,
    products: [],
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await carService.getAll();
            return data.products;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
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

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getCarDetails.fulfilled, (state, action) => {
                state.carDetails = action.payload
            }),
});

const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions,
    getAll,
    getCarDetails
}
export {
    carReducer,
    carActions
}