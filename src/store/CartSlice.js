import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/utils/constants";
import { toast } from 'react-toastify';


const initialState = {
    cart: [],
    discount: '0',
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        addNote: (state,action) => {
            const foundItem = state.cart.find((item) => item.id === action.payload.id);
            foundItem.note = action.payload.note;
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        }
    }
})


export const { addToCart, addNote, incrementQuantity, decrementQuantity, removeItem, setTotal } = cartSlice.actions;
export default cartSlice.reducer;