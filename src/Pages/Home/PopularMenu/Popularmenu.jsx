// import React from 'react';
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import MenuiTem from "../../Shared/MenuItem/MenuiTem";
import useManu from "../../../Hooks/useManu";

const Popularmenu = () => {
    const [manu] = useManu()
     const popular = manu.filter((i) => i.category == "popular");
    return (
      <section className="mb-12 mt-72 md:mt-10">
        <SectionTitle
          shortHading={"Check it out"}
          hading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {popular.map((item) => (
            <MenuiTem key={item._id} item={item}></MenuiTem>
          ))}
        </div>
        <div className="w-60 mx-auto mt-3 mb-10">
          <button className="btn btn-outline border-0 border-b-2 mt-6 mb-10">
            View Full Menu
          </button>
        </div>
      </section>
    );
};

export default Popularmenu;