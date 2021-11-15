import { combineReducers } from "redux";
import foodReducers from "./FoodReducers";

export default combineReducers({
    food: foodReducers
})