import React from 'react';
import Navbar from './Components/Navbar'
import FoodMachine from './Views/FoodMachine';
import FoodOrders from './Views/FoodOrders';
const App = () => {
  return ( 
    <div className='bg-gray-300 h-screen'>
    <Navbar />
    <div className='w-full flex justify-center mt-10'>
      <h1 className='text-2xl font-bold text-gray-600'>Select your food and enjoy</h1>
    </div>
    <div className='w-full flex mt-20 '>
      <div className='w-1/2 flex  justify-center rounded shadow-xl mx-10 bg-white'>
        <FoodMachine />
      </div>
      <div className='w-1/2 flex  justify-center rounded shadow-xl mx-10 bg-white'>
        <FoodOrders />
      </div>
    </div>
    </div>
   );
}
 
export default App;
