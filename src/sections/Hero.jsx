import { Link } from 'react-router-dom';
import { Button, Title } from '../components';
import { FaFacebook, FaRedditAlien, FaInstagram } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="w-full h-screen uppercase font-montserrat text-white flex justify-center md:justify-end items-center gap-[11%]">
        <div className="flex flex-col gap-7 items-center md:items-start text-center md:text-start">
          <Title text={'improve yourself'} bgSize={'w-[240px]'} />
          <h1>
            <span className="pl-0 md:pl-1.5 text-2xl xs:text-4xl text-s">
              Hustle for the
            </span>
            <span className="uppercase block text-6xl xs:text-[5.5rem] sm:text-[7rem] leading-[1] font-bold leading-27">
              muscle
            </span>
          </h1>
          <div className="z-10 ml-2.5">
            <Button
              text={'Our Classes'}
              color={'btnWhite'}
              arrowColor={'text-primary'}
              route={'/classes'}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4 justify-center items-center pr-20">
          <h3 className="[writing-mode:vertical-lr] font-extrabold text-lg tracking-widest">
            share
          </h3>
          <span className="w-[3px] h-[26px] bg-primary"></span>
          <Link to={'https://www.facebook.com/'} target="_blank">
            <i className="text-accent cursor-pointer">
              <FaFacebook size={20} />
            </i>
          </Link>
          <Link to={'https://www.reddit.com/'} target="_blank">
            <i className="text-accent cursor-pointer">
              <FaRedditAlien size={20} />
            </i>
          </Link>
          <Link to={'https://www.instagram.com/'} target="_blank">
            <i className="text-accent cursor-pointer">
              <FaInstagram size={20} />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
