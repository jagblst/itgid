import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minusItem: (state, data) => {
            let articul = data.payload;
            if(state.value[articul] === 1){
                delete state.value[articul]
            } else {
                state.value[articul]--
            }
        },
        deleteItem: (state, data) => {
            let articul = data.payload;
            delete state.value[articul]
        },
    }
});

export const { increment, minusItem, deleteItem } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;