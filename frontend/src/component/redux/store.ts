import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from "./slicer";

const store = configureStore({
  reducer: { productData: slicerReducer },
});

export default store;
