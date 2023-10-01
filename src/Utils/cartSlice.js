import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...action.payload ];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
   
    clearCart: (state, action) => {
      

      return { items: [] }; 
    },
    updateItem: (state, action) => {},
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
