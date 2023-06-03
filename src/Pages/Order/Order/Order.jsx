// import React from 'react';

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Helmett from "../../../Components/Helmet/Helmett";
import oderImg from "../../../assets/shop/oder.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";

import { useState } from "react";
import useManu from "../../../Hooks/useManu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categorys = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  const indexInnaShial = categorys.indexOf(category);

  const [tabIndex, setTabIndex] = useState(indexInnaShial);

  const [manu] = useManu();
  const drinks = manu.filter((i) => i.category == "drinks");
  const dessert = manu.filter((i) => i.category == "dessert");
  const pizza = manu.filter((i) => i.category == "pizza");
  const salad = manu.filter((i) => i.category == "salad");
  const soup = manu.filter((i) => i.category == "popular");

  return (
    <div className="mb-20">
      <Helmett title={"Bistro || Order Food "}></Helmett>
      <Cover title={"Order Food Now "} img={oderImg}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase mt-4">
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab orderIetmsTab={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab orderIetmsTab={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab orderIetmsTab={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab orderIetmsTab={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab orderIetmsTab={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
