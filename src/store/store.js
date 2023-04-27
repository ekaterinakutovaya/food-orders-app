import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import CartReducer from "./CartSlice";
import DishesReducer from "./DishesSlice";
import FilterReducer from "./FilterSlice";
import ModalReducer from "./ModalSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['filter', 'modal']
}

const reducer = combineReducers({
    cart: CartReducer,
    dishes: DishesReducer,
    filter: FilterReducer,
    modal: ModalReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export default store;