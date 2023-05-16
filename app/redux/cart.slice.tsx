import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    quantity: number;
    // Add other properties of the item
}
const storedCart = localStorage.getItem('cart');

const cartSlice = createSlice({
    name: 'cart',
    initialState: storedCart? JSON.parse(storedCart) : [],
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            debugger
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    const index = state.findIndex((item) => item.id === action.payload);
                    state.splice(index, 1);
                } else {
                    item.quantity--;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} = cartSlice.actions;
