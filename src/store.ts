import { configureStore } from '@reduxjs/toolkit'
import products from './Products/product.slice'

const store = configureStore({
    reducer: {
        products,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
