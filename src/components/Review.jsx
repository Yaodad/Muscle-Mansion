import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialInputs } from '../constants';
import { quote } from '../assets/icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Review = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            hiddenClass: 'swiper-button-hidden',
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        className="mySwiper"
        style={{
          '--swiper-navigation-size': '34px',
          '--swiper-navigation-top-offset': '50%',
          '--swiper-navigation-sides-offset': '5px',
          '--swiper-navigation-color': '#ff6a84',
          '--swiper-pagination-color': '#ff6a84',
        }}
      >
        {testimonialInputs.members.map((member) => (
          <SwiperSlide key={member.name}>
            <div className="relative overflow-hidden max-w-[260px] xs:max-w-[300px] mx-auto my-11 drop-shadow-xl hover:shadow-lg cursor-pointer">
              <div className="relative">
                <img
                  src={member.photo}
                  alt="member photo"
                  className="object-cover"
                />
                <img
                  src={quote}
                  alt="quotation-mark"
                  className="absolute left-4 bottom-[-33px] w-14"
                />
              </div>
              <div className="text-start font-montserrat bg-white h-[220px] flex flex-col justify-between border-t-[10px] border-semi-light-gray px-5 py-7">
                <p className="font-medium capitalize pb-2 text-[15px]">
                  {member.comment}
                </p>
                <div>
                  <h2 className="text-lg font-bold capitalize">
                    {member.name}
                  </h2>
                  <h3 className="font-medium text-secondary capitalize">
                    {member.profession}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
