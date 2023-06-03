// import React from 'react';

const SectionTitle = ({shortHading,hading}) => {
    return (
      <div className=" md:w-4/12 mx-auto text-center md:mb-10 mb-5 mt-5">
        <p className="text-[#D99904] italic text-lg mb-2">---{shortHading}---</p>
        <h1 className="text-3xl font-medium border-y-4 py-4">{hading}</h1>
      </div>
    );
};

export default SectionTitle;