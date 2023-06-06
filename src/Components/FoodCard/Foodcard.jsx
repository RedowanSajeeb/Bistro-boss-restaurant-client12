// import React from 'react';

const Foodcard = ({itms}) => {
        const { name, image, price, recipe } = itms
        const handelAddToCard = (item) =>{
          console.log(item);

        }
    return (
      <div className="card w-[424px] mx-auto bg-[ #F3F3F3] shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="FoodImg" />
        </figure>
        <p className="text-xl mr-4 mt-4 px-2 rounded-lg bg-slate-950 text-white absolute right-0">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handelAddToCard(itms)} className="btn w-52 btn-outline bg-[#E8E8E8] border-0 border-b-4 text-[#BB8506] border-[#BB8506] mt-6">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default Foodcard;