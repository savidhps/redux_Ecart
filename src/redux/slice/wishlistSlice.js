import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addWishList,removeWishlistItem}=wishlistSlice.actions
export default wishlistSlice.reducer