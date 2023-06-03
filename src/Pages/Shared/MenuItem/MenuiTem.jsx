// import React from 'react';

const MenuiTem = ({item}) => {
    // console.log(item);
    const {name,image,price,recipe} = item
    return (
      <div className="flex space-x-2 items-center justify-center">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        <div>
          <h3 className="uppercase text-xl">{name}----------</h3>
          <p className="w-[ 443px] text-[#737373]">{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    );
};

export default MenuiTem;