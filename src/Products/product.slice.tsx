import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Product {
    title: string
    id: string
    price: number
}

const initialState = [
    { title: 'Escape 1', price: 60, id: 'efts' },
    { title: 'Escape 2', price: 30, id: 'efts2' },
]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        },
    },
})

export const { addProduct } = productSlice.actions

export const getProducts = (state: RootState) => state.products

export default productSlice.reducer
