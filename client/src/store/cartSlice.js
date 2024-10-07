import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const duplicate = state.productsInCart.find(product => product.id === action.payload.id);
            if (duplicate) {
                const new_cart = state.productsInCart.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: action.payload.quantity }
                    }
                    return product;
                });
                state.productsInCart = new_cart;
            } else {
                state.productsInCart = [...state.productsInCart, action.payload];
            }
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
            console.log("Cart updated and saved to localStorage:", state.productsInCart);
        },
        removeFromCart(state, action) {
            state.productsInCart = state.productsInCart.filter(item => item.id !== action.payload);
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
            console.log("Item removed, updated cart:", state.productsInCart);
        },
        changeQuantity(state, action) {
            const new_cart = state.productsInCart.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity }
                }
                return product;
            });
            state.productsInCart = new_cart;
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
            console.log("Quantity changed, updated cart:", state.productsInCart);
        },
        getTotal(state) {
            state.total = state.productsInCart.reduce((acc, product) => {
                return acc + (product.discont_price || product.price) * product.quantity;
            }, 0);
        },
        clearCart(state) { 
            state.productsInCart = []; 
            state.total = 0; 
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
            console.log("Cart cleared:", state.productsInCart);
        }
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, changeQuantity, getTotal, clearCart } = cartSlice.actions;