import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/utils/constants";
import { data } from "@/data/db";

export const fetchDishes = createAsyncThunk(
    "dishes/fetchDishes",
    async () => {
        try {
            // const response = await fetch(API_URL + `/dishes`);
            // const data = await response.json();
            // return data;

            const {dishes} = data;
            return dishes;

        } catch (error) {
            console.log(error.message);
            
        }

    }
)

const initialState = {
    dishes: [],
    loading: false
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDishes.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchDishes.fulfilled, (state, action) => {
            state.loading = false;
            state.dishes = action.payload;
        });
        builder.addCase(fetchDishes.rejected, (state, action) => {
            state.loading = false;
            state.dishes = [];
        });
    }
})


export const { reducer } = dishesSlice;;
export default reducer;