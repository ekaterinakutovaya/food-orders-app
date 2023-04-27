import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false,
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modalOpen = action.payload;
        }
    }
})


export const { setModal } = ModalSlice.actions;
export default ModalSlice.reducer;