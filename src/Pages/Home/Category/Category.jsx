// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Category.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import slider1 from "./../../../assets/home/slide1.jpg";
import slider2 from "./../../../assets/home/slide2.jpg";
import slider3 from "./../../../assets/home/slide3.jpg";
import slider4 from "./../../../assets/home/slide4.jpg";
import slider5 from "./../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import { useRef } from "react";

const Category = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <section>
      <SectionTitle
        shortHading={"From 11:00am to 10:00pm"}
        hading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // modules={[Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Category;
