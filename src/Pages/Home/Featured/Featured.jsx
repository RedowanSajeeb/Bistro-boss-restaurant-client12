// import React from 'react';

import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import "./Featured.css"
const Featured = () => {
    return (
      <div className="mb-7 bgimg bg-fixed text-white pt-10 md:py-20  ">
        <SectionTitle
          shortHading={"---Check it out---"}
          hading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex items-center justify-center pb-20 pt-12  md:px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 mt-5 ms-4">
            <h1>March 20, 2023</h1>
            <h4 className="uppercase">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nam laboriosam in sed iste aspernatur nulla voluptatum, earum
              numquam fugiat rem sunt similique cum necessitatibus! Debitis ad
              aliquam nostrum id! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio rerum similique deserunt suscipit dolorem
              culpa itaque laborum officia, corrupti mollitia. <br />
              <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Read More</button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Featured;