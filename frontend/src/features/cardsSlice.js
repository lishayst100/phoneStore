import { createSlice } from "@reduxjs/toolkit";
import { cards } from "./cards";


const initialState = {
    cards : localStorage.getItem('cardsItems')?
        JSON.parse(localStorage.getItem('cardsItems')): cards
}


const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers:{
        addCard(state,action){
            state.cards.push(action.payload)
            localStorage.setItem('cardsItems', JSON.stringify(state.cards))
        },
        editCard(state,action){
            const cardToEdit = action.payload
            const index = state.cards.findIndex( i => i.id === cardToEdit.id)

            state.cards[index] = cardToEdit
            localStorage.setItem('cardsItems', JSON.stringify(state.cards))
        },
        deleteCard(state,action){
            const index = state.cards.findIndex(i => i.id === action.payload)
            state.cards.splice(index, 1)
            localStorage.setItem('cardsItems', JSON.stringify(state.cards))
        }
    }
})

export const {addCard,deleteCard,editCard} = cardSlice.actions
export default cardSlice.reducer