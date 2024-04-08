import { Button } from '../components';

const Price = ({ img, type, amount, benefits }) => {
  return (
    <div className="max-w-[23.75rem] shadow-xl">
      <img
        src={img}
        alt="bg-img"
        className="object-cover w-full max-h-[252px] peer grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
      />
      <div className="relative flex flex-col items-center justify-center gap-5 bg-white font-montserrat text-secondary text-center peer-hover:text-primary">
        <h2 className="absolute top-[-36px] left-[50%] translate-x-[-50%] w-[15.6rem] bg-white pt-5 text-xl font-bold uppercase hover:text-primary transition-all duration-300 ease-in-out">
          {type}
        </h2>
        <p className="relative text-black font-bold text-5xl mt-10 uppercase">
          <span className="absolute top-[1px] left-[-24px] text-secondary font-normal text-2xl">
            ₱
          </span>
          {amount}
        </p>
        {benefits.map((benefit) => (
          <p key={benefit} className="text-secondary font-medium capitalize">
            {benefit}
          </p>
        ))}
        <div className="z-10 mt-5 mb-10">
          <Button text={'Purchase Now'} color={'btnPink'} route={'/contact'} />
        </div>
      </div>
    </div>
  );
};

export default Price;
