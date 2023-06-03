// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuiTem from "../../Shared/MenuItem/MenuiTem";

const MenuCatagory = ({ items, coverimg, title }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverimg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuiTem key={item._id} item={item}></MenuiTem>
        ))}
      </div>
      <div className="w-80 mx-auto">
        <Link to={`/order/${title}`}>
          <button className="btn  btn-outline border-0 border-b-2 mt-6 mb-10">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCatagory;