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
  favoris: [],
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
      state.value.img = action.payload.img;
      state.value.spec = action.payload.spec;
    },
    addToCart: (state, action) => {
      const item = {
        name: action.payload.name,
        prix: action.payload.prix,
        img: action.payload.img,
      };
      state.cart.push(item);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
    },
    addToFavorites: (state, action) => {
      const item = {
        name: action.payload.name,
        prix: action.payload.prix,
        img: action.payload.img,

        fonction: action.payload.fonction,
      };
      state.favoris.push(item);
    },
    removeFromFavorites: (state, action) => {
      state.favoris = state.favoris.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const {
  product,
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} = userSlice.actions;
export default userSlice.reducer;
