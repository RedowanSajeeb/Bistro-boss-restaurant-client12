// import React from 'react';

import Helmett from "../../../Components/Helmet/Helmett";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import useManu from "../../../Hooks/useManu";
import Cover from "../../Shared/Cover/Cover";
import MenuCatagory from "../MenuCatagory/MenuCatagory";
import coverimg from "./../../../assets/menu/banner3.jpg";
import desserimg from "./../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "./../../../assets/menu/pizza-bg.jpg";
import saladimg from "./../../../assets/menu/salad-bg.jpg";
import soupimg from "./../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [manu] = useManu();
  const offered = manu.filter((i) => i.category == "offered");
  const dessert = manu.filter((i) => i.category == "dessert");
  const pizza = manu.filter((i) => i.category == "pizza");
  const salad = manu.filter((i) => i.category == "salad");
  const soup = manu.filter((i) => i.category == "popular");

  return (
    <div>
      <Helmett title={"Bistro || Menu"}></Helmett>
      <Cover img={coverimg} title={"OUR MENU"}></Cover>

      <SectionTitle
        shortHading={"Don't miss"}
        hading={`TODAY'S OFFER`}
      ></SectionTitle>
      {/* --------offerd today */}
      <MenuCatagory items={offered}></MenuCatagory>
      {/* --------dessert--- */}
      <MenuCatagory
        items={dessert}
        coverimg={desserimg}
        title={"dessert"}
      ></MenuCatagory>
      {/* --------pizza--- */}
      <MenuCatagory
        items={pizza}
        coverimg={pizzaimg}
        title={"pizza"}
      ></MenuCatagory>
      {/* --------salad--- */}
      <MenuCatagory
        items={salad}
        coverimg={saladimg}
        title={"salad"}
      ></MenuCatagory>
      {/* --------soup--- */}
      <MenuCatagory
        items={soup}
        coverimg={soupimg}
        title={"soup"}
      ></MenuCatagory>
    </div>
  );
};

export default Menu;
