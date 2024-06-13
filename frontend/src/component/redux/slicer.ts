import { createSlice } from "@reduxjs/toolkit";
interface headphone {
  id: string;
  brand: string;
  name: string;
  model: string;
  color: string;
  productInformation: {
    highlights: string[];
    box: string[];
    techSpecs: {
      height: string;
      length: string;
      width: string;
      weight: string;
      connections: string;
      battery: string;
      batteryLife: string;
    };
  };
  picture: {
    [color: string]: string[];
  };
  colorCode: string;
  price: number;
  total: number;
  quantity :number
}
interface ProductState {
  productData: headphone | null;
  category: string;
  userData: {_id:null|string ,email: null | string ,username : null| string ,cart : headphone[]}
  loading: boolean;
  error: boolean;
}
interface UserData {
  _id : null |string
  email : null | string
  username : null| string
  password: null | string
  cart: headphone[]; 
}
const initialState: ProductState = {
  productData: null,
  category: "Headphone",
  userData : {_id : null,email : null,username : null,cart:[]}, 
  loading: false,
  error: false,
};
const productSlicer = createSlice({
  name: 'product',
  initialState
  , reducers: {
    selectProductFormNav: (state, action) => {
      state.productData = action.payload
    },
    selectCategory: (state, action) => {
      state.category = action.payload
    },
    addCart: (state, action : {payload : headphone}) => {
      const product = action.payload
      const findProduct  = state.userData.cart.findIndex((prevProduct:headphone) => {
        return (prevProduct.id === product.id
          && prevProduct.color[0] === product.color[0] &&
        prevProduct.name === product.name)
      }
      )
      if (findProduct !== -1) {
        state.userData.cart[findProduct].quantity = product.quantity + state.userData.cart[findProduct].quantity;
        state.userData.cart[findProduct].total = state.userData.cart[findProduct].price *(state.userData.cart[findProduct].quantity)
      } else {
        state.userData.cart =[...state.userData.cart , product]
      }
    },
    loginUser: (state, action: { payload: UserData }) => { 
      state.userData = action.payload;
    },
    logoutUser: (state,action) => { 
      state.userData.cart= [] ;
      state.userData.email = action.payload;
      state.userData.username = action.payload;
      state.userData._id = action.payload
    },
    userDelete: (state, action: { payload: headphone }) => { 
      const newItem = action.payload;
      const findProduct  = state.userData.cart.findIndex((prevProduct:headphone) => {
        return (prevProduct.id === newItem.id
          && prevProduct.color[0] === newItem.color[0] &&
        prevProduct.name === newItem.name)
      }
      )

      if (findProduct !== -1) {
        state.userData!.cart[findProduct].quantity -= 1;
        state.userData!.cart[findProduct].total =  state.userData!.cart[findProduct].quantity *  state.userData!.cart[findProduct].price  ;
        if (state.userData!.cart[findProduct].quantity <= 0) {
          state.userData!.cart.splice(findProduct, 1);
        }
      } 
    },
    userAdd: (state, action: { payload: headphone }) => { 
      const newItem = action.payload;
      const findProduct  = state.userData.cart.findIndex((prevProduct:headphone) => {
        return (prevProduct.id === newItem.id
          && prevProduct.color[0] === newItem.color[0] &&
        prevProduct.name === newItem.name)
      }
      )

      if (findProduct !== -1) {
        state.userData!.cart[findProduct].quantity += 1;
        state.userData!.cart[findProduct].total =  state.userData!.cart[findProduct].quantity *  state.userData!.cart[findProduct].price  ;
      } 
    },
  }
})
export const { selectProductFormNav ,selectCategory ,addCart ,loginUser,logoutUser ,userDelete ,userAdd} = productSlicer.actions 
export default productSlicer.reducer