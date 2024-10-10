import { configureStore } from "@reduxjs/toolkit";
import { cartReducer} from "./cartSlice";
import { wishListReducer } from "./wishListSlice";
import { productReducer } from "./productSlice";
import { userReducer } from "./userSlice";


const store = configureStore({
  reducer: {
     
    // cart : userApi
    cart: cartReducer,
    wishlist: wishListReducer,
    product: productReducer,
    users : userReducer
  }
 
})

export default store;