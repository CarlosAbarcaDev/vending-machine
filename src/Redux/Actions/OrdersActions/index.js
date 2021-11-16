import {
  ORDER_REQUEST_INIT,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_ERROR,
} from "../../Types";

export const orderData = (order) => {
  return async (dispatch) => {
    dispatch(getOrderInit());

    try {
      dispatch(getOrderSuccess(order));
    } catch (error) {
      getOrderError(error);
    }
  };
};

const getOrderInit = () => ({
  type: ORDER_REQUEST_INIT,
  payload: true,
});
const getOrderSuccess = (food) => ({
  type: ORDER_REQUEST_SUCCESS,
  payload: food,
});

const getOrderError = () => ({
  type: ORDER_REQUEST_ERROR,
  payload: true,
});
