import { GET_FOOD_INIT, GET_FOOD_SUCCESS, GET_FOOD_ERROR } from "../../Types";
import axios from "axios";
import { API_URL, options } from "../../../Utils/baseAPI";

export const foodData = () => {
  return async (dispatch) => {
    dispatch(getFoodInit());

    try {
      const getData = () => {
        return axios.get(API_URL, {
          headers: options,
        });
      };

      const dataResult = await getData();
      dispatch(getFoodSuccess(dataResult.data));
    } catch (error) {
      getFoodError(error);
    }
  };
};

const getFoodInit = () => ({
  type: GET_FOOD_INIT,
  payload: true,
});
const getFoodSuccess = (food) => ({
  type: GET_FOOD_SUCCESS,
  payload: food,
});

const getFoodError = () => ({
  type: GET_FOOD_ERROR,
  payload: true,
});
