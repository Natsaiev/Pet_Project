import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    priceFrom: 0,
    priceTo: 10000,
    sale: null,
    sorted: null
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePriceFrom(state, action) {
            state.priceFrom = action.payload
        },
        changePriceTo(state, action) {
            state.priceTo = action.payload
        },
        changeSale(state, action) {
            state.sale = action.payload
        },
        changeSorted(state, action) {
            state.sorted = action.payload
        }
    }
})

export default filterSlice.reducer;
export const  { changePriceFrom, changePriceTo, changeSale, changeSorted } = filterSlice.actions;