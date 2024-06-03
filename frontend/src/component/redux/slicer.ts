import { createSlice } from "@reduxjs/toolkit";

const productSlicer = createSlice({
  name : 'product',
  initialState: {
    productData: null,
    category  : null,
    loading : false
    , error : false
  }, reducers: {
    selectProductFormNav : (state,action) => {
      state.productData = action.payload
    },
    selectCategory : (state,action) => {
      state.category = action.payload
    }
  }
})
export const { selectProductFormNav ,selectCategory} = productSlicer.actions 
export default productSlicer.reducer