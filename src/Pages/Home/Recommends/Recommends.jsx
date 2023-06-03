import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommend = data.filter(
          (recommendation) => recommendation.recommendation
        );
        setRecommends(recommend);
      });
  }, []);

  return (
    <section className="md:mb-24">
      <SectionTitle
        shortHading={"Should Try"}
        hading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:gap-x-24 gap-14">
        {recommends.map((chefRecommend) => (
          <div
            key={chefRecommend._id}
            className="card w-fit bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={chefRecommend.image}
                alt="chef"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl mb-2">{chefRecommend.name}</h2>
              <p>{chefRecommend.recipe}</p>
              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] mt-6">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
