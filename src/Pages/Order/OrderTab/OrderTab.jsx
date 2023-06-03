// import React from 'react';

import Foodcard from "../../../Components/FoodCard/Foodcard";

const OrderTab = ({ orderIetmsTab }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-y-10 mt-10">
      {orderIetmsTab.map((i) => (
        <Foodcard key={i._id} itms={i}></Foodcard>
      ))}
    </div>
  );
};

export default OrderTab;