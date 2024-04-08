import { bgCard } from '../assets/images';

const Card = ({ icon, title, description }) => {
  return (
    <div className="overflow-hidden relative top-[-3.8rem] px-[25px] py-[15px] font-montserrat text-center cursor-pointer hover:text-white flex flex-col justify-center gap-3 items-center bg-white w-full lg:w-[380px] h-[340px] rounded-br-[2rem] rounded-tl-[2rem] drop-shadow-2xl group">
      <img src={icon} alt={title} />
      <h3 className="uppercase text-2xl font-bold">{title}</h3>
      <p className="text-base font-medium">{description}</p>
      <img
        src={bgCard}
        alt="bg-image"
        className="absolute top-0 object-cover hidden group-hover:block z-[-1]"
      />
    </div>
  );
};

export default Card;
