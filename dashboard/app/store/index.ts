import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './rootReducers'

const store = configureStore({
    reducer: rootReducers,
    // middleware: getDefaultMiddleware => {
    //     return getDefaultMiddleware({
    //         serializableCheck: false
    //     })
    // },
    // devTools: process.env.VITE_NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;