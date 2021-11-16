
import { useSelector } from "react-redux";
import { map } from "lodash";

const FoodOrders = () => {
  //global state
  const data = useSelector((state) => state.orders.order);
  const dataLoading = useSelector((state) => state.orders.loading);
  const dataError = useSelector((state) => state.orders.error);

  return (
    <div className="w-full overflow-auto">
    <div className="w-full flex justify-center rounded-md">
      <h1 className="mt-5 text-gray-600 text-lg">Orders Here</h1>
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
         
        </div>
      ) : null}
      {map(data, (food, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-between my-2 border-2 border-green-400 rounded-lg p-5"
          >
            <div className="w-full flex justify-center">
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
            
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default FoodOrders;
