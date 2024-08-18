import banner1 from "../../../images/bannerImage/banner1_notext.jpg";
import banner2 from "../../../images/bannerImage/banner1_notext.jpg";
import banner3 from "../../../images/bannerImage/banner1_notext.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import '../../../css/banner.css'

const panels = [banner1, banner2, banner3];

const Banner = () => {
  return (
    // Banner section
    <div className="relative">
      <Swiper
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="flex relative h-[550px] lg:h-[810px] mx-[-20px] lg:mx-[-255px]"
      >
        {panels.map((panel, index) => {
          return (
            <SwiperSlide className="relative w-full rounded">
              <div className="absolute w-full h-full "></div>
              {/* Image */}
              <img
                className="w-full h-full object-cover rounded"
                src={panel}
                alt=""
              />

              {/* Content */}
              <div className="absolute flex flex-col bottom-[30%] left-[10%] lg:items-center">
                <h1 className="text-3xl md:text-5xl lg:text-[80px] text-secondary font-[400]">
                  Stylish
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-[80px] text-secondary font-[400]">
                  Top Trending
                </h1>
                <p className="text-secondary mt-[20px]">
                  So soft you don't want to take it off.
                </p>
                <button
                  
                  className="block w-[200px] h-[55px] left-[10%] bg-secondary text-primary text-[12px] font-[600] mt-[50px] rounded-[30px]"
                >
                  EXPLORE NOW
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
