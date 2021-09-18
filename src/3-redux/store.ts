import {configureStore} from "@reduxjs/toolkit"
import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import messageReducer from "./data-reducer";
import {filtersReducer} from "./filters-reducer";


export const rootReducer = combineReducers({
    message: messageReducer,
    filters: filtersReducer,

})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch



/*
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
*/
