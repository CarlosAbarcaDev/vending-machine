import { combineReducers } from "redux";
import foodReducers from "./FoodReducers";
import orderReducers from "./OrderReducers";
export default combineReducers({
    food: foodReducers,
    orders: orderReducers
})