import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    type: 0,
    searchValue: ""
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.category = action.payload;
        },
        setSelectedType: (state, action) => {
            state.type = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})


export const { setSelectedTab, setSelectedType, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;