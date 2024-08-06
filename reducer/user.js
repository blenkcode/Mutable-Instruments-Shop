import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: null,
    prix: null,
    feature: null,
    spec: null,
    fonction: null,
    imgp: null,
  },
  cart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    product: (state, action) => {
      state.value.name = action.payload.name;
      state.value.prix = action.payload.prix;
      state.value.feature = action.payload.features;
      state.value.fonction = action.payload.fonction;
      state.value.imgp = action.payload.imgp;
      state.value.spec = action.payload.spec;
    },
    addToCart: (state, action) => {
      const item = {
        name: action.payload.name,
        prix: action.payload.prix,
      };
      state.cart.push(item);
    },
  },
});

export const { product, addToCart } = userSlice.actions;
export default userSlice.reducer;
