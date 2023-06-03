import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import quater from "./../../../assets/home/quote-left 1.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TESTIMONIALS = () => {
    const [reviews,setReviews] =useState([])
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
    // console.log(reviews);
    return (
      <section className="mt-14">
        <SectionTitle
          shortHading={"What Our Clients Say"}
          hading={"TESTIMONIALS"}
        ></SectionTitle>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="mx-20 flex flex-col justify-center items-center">
                  <div>
                    <Rating
                      style={{ maxWidth: 180, color: "#CD9003" }}
                      value={review.rating}
                      readOnly
                    />
                  </div>
                  <div className="py-10">
                    <img src={quater} alt="" />
                  </div>
                  <div className="text-center">
                    <p>{review.details}</p>
                    <h4 className="text-3xl font-normal mb-10 text-[#CD9003]">
                      {review.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};

export default TESTIMONIALS;