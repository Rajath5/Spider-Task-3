import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewSaveReducer} from "./Reducer/productReducer";
import thunk from "redux-thunk";
import {cartReducer} from "./Reducer/cartReducer";
import Cookie from "js-cookie"
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from "./Reducer/userReducer";
import { OrdercreateReducer, orderDetailsReducer, orderPayReducer, myOrdersListReducer, orderListReducer, orderDeleteReducer } from "./Reducer/orderReducer";

const cartItems = Cookie.getJSON("cartItems")||[];
const userInfo = Cookie.getJSON("userInfo")|| null;

const initialState = {cart: {cartItems},userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    orderCreate: OrdercreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrdersListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;