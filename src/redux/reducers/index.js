import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

export const allReducers = combineReducers({
  productReducer,
  userReducer
});