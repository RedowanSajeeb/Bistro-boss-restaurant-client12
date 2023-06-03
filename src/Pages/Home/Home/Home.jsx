// import React from 'react';

import Helmett from "../../../Components/Helmet/Helmett";
import AboutBannar from "../AboutBannar/AboutBannar";
import Banner from "../Bannar/Banner";
import Callus from "../Callus/Callus";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popularmenu from "../PopularMenu/Popularmenu";
import Recommends from "../Recommends/Recommends";
import TESTIMONIALS from "../TESTIMONIALS/TESTIMONIALS";



const Home = () => {
    return (
      <div>
        <Helmett title={"Bistro Boss || Home"}></Helmett>
        <Banner></Banner>
        <Category></Category>
        <AboutBannar></AboutBannar>
        <Popularmenu></Popularmenu>
        <Callus></Callus>
        <Recommends></Recommends>
        <Featured></Featured>
        <TESTIMONIALS></TESTIMONIALS>
      </div>
    );
};

export default Home;