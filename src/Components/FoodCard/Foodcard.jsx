// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Foodcard = ({ itms }) => {
  const { _id, name, image, price, recipe } = itms;
const navigate = useNavigate()
const location = useLocation()
  const { user } = useContext(AuthContext);
  const handelAddToCard = (item) => {
    console.log(item);
    if (user && user.email) {
      const  cartsItem = {menuItmsID: _id, name, image, price, recipe, email: user.email}     
      fetch("http://localhost:3000/carts", {
        method: "post",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartsItem)
        
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your item has been added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
     Swal.fire({
       title: "you are not allowed",
       text: "you cannot add this item at first login and tray again",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, i want login",
     }).then((result) => {
       if (result.isConfirmed) {
       navigate("/login", {state : { from: location }})
       }
     });
    }
  };
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
          <button
            onClick={() => handelAddToCard(itms)}
            className="btn w-52 btn-outline bg-[#E8E8E8] border-0 border-b-4 text-[#BB8506] border-[#BB8506] mt-6"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
