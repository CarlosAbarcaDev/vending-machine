import React, { useEffect } from "react";
import { foodData } from "../../Redux/Actions/FoodActions";
import { orderData } from "../../Redux/Actions/OrdersActions";
import { useSelector, useDispatch } from "react-redux";
import { map } from "lodash";
const FoodMachine = () => {
  const dispatch = useDispatch();

  //food request
  useEffect(() => {
    const foodRequest = () => dispatch(foodData());
    foodRequest();
  }, []);

  //global state
  const data = useSelector((state) => state.food.food.data);
  const dataLoading = useSelector((state) => state.food.loading);
  const dataError = useSelector((state) => state.food.error);

  //refresh petition
  const onSubmitPetition = () => {
    const foodRequest = () => dispatch(foodData());
    foodRequest();
  };

  //submit order
  const onSubmitOrder = (order) =>{
    const submit = () => dispatch(orderData(order));
    submit()
  }

  console.log(data);
  console.log(dataLoading);
  

  return (
    <div className="w-full overflow-auto">
      <div className="w-full flex justify-center rounded-md">
        <h1 className="mt-5 text-gray-600 text-lg">Pick your Food</h1>
      </div>
      <div className="w-full mt-5 p-2">
        {dataLoading ? (
          <div className="w-full flex justify-center">
            <p>Loading...</p>
          </div>
        ) : null}
        {dataError ? (
          <div className="w-full flex justify-center">
            <p>Something goes wrong try again...</p>
            <div
              onClick={() => onSubmitPetition}
              className="h-10  px-14 text-lg text-white transition-colors duration-150 rounded focus:shadow-outline "
              style={{ backgroundColor: "#00B844" }}
            >
              Refresh
            </div>
          </div>
        ) : null}
        {map(data, (food, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-between my-2 border-2 border-green-400 rounded-lg p-5"
            >
              <div className="w-1/3 flex">
                <img
                  src={food.thumbnail}
                  alt="food"
                  className="h-20 w-20 rounded-lg"
                />
                <div className="h-full flex flex-wrap content-center mx-10">
                  <h1 className="text-xl font-bold text-gray-600">
                    {food.name}
                  </h1>
                </div>
              </div>
              <div className="w-1/3 flex justify-end">
                <button
                  type="submit"
                  className="h-10  px-14 text-lg text-white transition-colors duration-150 rounded focus:shadow-outline "
                  style={{ backgroundColor: "#00B844" }}
                  onClick={() => onSubmitOrder(food)}
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodMachine;
