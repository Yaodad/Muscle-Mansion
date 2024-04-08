import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
} from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { bgCoach, bgUpArrow } from '../assets/images';
import { Link } from 'react-router-dom';

const Coach = ({ photo, name, title }) => {
  return (
    <div className="w-[350px] my-3 cursor-pointer drop-shadow-2xl">
      <div className="relative overflow-hidden flex flex-col justify-center items-center">
        <img
          src={photo}
          alt="coach1"
          className="w-[250px] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 "
        />
        <img
          src={bgCoach}
          alt="erwer"
          className="absolute bottom-[-150px] z-[-1]"
        />
        <img
          src={bgUpArrow}
          alt="arrow-background"
          className="absolute bottom-[-2px]"
        />
        <i className="absolute bottom-[-2px] text-primary">
          <IoIosArrowUp size={20} />
        </i>
      </div>

      <div className="bg-white font-montserrat flex flex-col items-center justify-center text-center gap-1 pt-7 group">
        <h2 className="font-bold text-2xl capitalize">{name}</h2>
        <h3 className="text-secondary font-medium capitalize">{title}</h3>
        <div className="flex justify-center items-center gap-4 text-secondary mt-4">
          <Link to={'https://www.facebook.com/'} target="_blank">
            <i className="text-accent">
              <FaFacebook size={18} />
            </i>
          </Link>
          <Link to={'https://www.instagram.com/'} target="_blank">
            <i className="text-accent">
              <FaInstagram size={18} />
            </i>
          </Link>
          <Link to={'https://www.snapchat.com/'} target="_blank">
            <i className="text-accent">
              <FaSnapchat size={18} />
            </i>
          </Link>
          <Link to={'https://www.whatsapp.com/'} target="_blank">
            <i className="text-accent">
              <FaWhatsapp size={18} />
            </i>
          </Link>
        </div>
        <span className="bg-primary mt-5 w-10 group-hover:w-full h-1 transition-all duration-500 ease-in-out"></span>
      </div>
    </div>
  );
};

export default Coach;
