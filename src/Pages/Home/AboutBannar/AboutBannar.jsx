// import React from 'react';
import  chefservice from "./.../../../../../assets/home/chef-service.jpg"
const AboutBannar = () => {
    return (
      <div className=" mb-36 relative">
        <img className="rounded-lg " src={chefservice} alt="" />
        <div className=" md:-mt-96 -mt-36 bg-white  bg-opacity-95 rounded-2xl p-10
             md:p-20 absolute  md:m-24">
          <h2 className="text-center text-5xl mb-4 uppercase">Bistro Boss</h2>
          <p>
            `Bistro Boss` is a term that could refer to different things, but
            `Ill` assume `youre` referring to a fictional character or role in a
            restaurant context. A Bistro Boss would typically be the person in
            charge of overseeing the operations of a bistro or restaurant. Their
            responsibilities may include managing the staff, ensuring quality
            service and food, handling customer complaints, overseeing finances
            and budgets, and creating a welcoming atmosphere for guests.
          </p>
        </div>
      </div>
    );
};

export default AboutBannar;