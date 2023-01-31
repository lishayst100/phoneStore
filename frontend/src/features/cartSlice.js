
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems'))
        : [],
    CartTotalQuantity: 0,
    CartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left"
                })
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = newCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} remove from cart`, {
                position: "bottom-left"
            })
        },
        dicreaseFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info(`${action.payload.name} decreased from cart`, {
                    position: "bottom-left"
                })
            } else if (state.cartItems[itemIndex].cartQuantity){
                const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = newCartItems
               
                toast.error(`${action.payload.name} remove from cart`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state,action){
            state.cartItems = []
            toast.info('Cart is Clear', {
                position: "bottom-left"
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        }, getTotal(state, action) {
           let {total,quantity} = state.cartItems.reduce((cartTotal,item)=>{
                const {price, cartQuantity} = item;
                const itemTotal = price * cartQuantity 
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },{
                total: 0,
                quantity:0
            })
            state.CartTotalQuantity = quantity
            state.CartTotalAmount = total
    }

    }

})


export const { addToCart, removeFromCart, dicreaseFromCart, clearCart ,getTotal} = cartSlice.actions
export default cartSlice.reducer