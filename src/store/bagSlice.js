import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload); // since we are not modifying the state and replacing the state we need to return a new array.
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
