import { Review, Title } from '../components';
import { testimonialInputs } from '../constants';

const Testimonial = () => {
  return (
    <section>
      <div className="container my-[90px]">
        <div className="flex flex-col items-center justify-center mb-3 gap-4 text-center font-montserrat">
          <Title
            text={'testimonials'}
            bgSize={'w-[240px]'}
            textColor={'text-white'}
            textWeight={'font-bold'}
          />
          <h1 className="font-bold text-4xl capitalize mt-5">
            {testimonialInputs.subject}
          </h1>
          <p className="text-secondary font-medium whitespace-pre-wrap">
            {testimonialInputs.description}
          </p>
        </div>
        <Review />
        <div className="flex justify-center items-center flex-wrap gap-3 my-10 bg-transparent">
          {testimonialInputs.logos.map((logo, index) => (
            <img
              src={logo}
              alt="logo"
              key={index}
              className="scale-[0.8] hover:invert transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
