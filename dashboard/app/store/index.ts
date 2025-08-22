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

export default store;