import { Link } from 'react-router-dom';
import { FaFacebook, FaReddit, FaPinterest, FaSnapchat } from 'react-icons/fa';
import { mmLogoGray } from '../assets/images';
import { footerInputs } from '../constants';

const Footer = () => {
  return (
    <section>
      <div className="container my-[90px]">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 font-montserrat text-secondary font-medium">
          <div className="w-full sm:w-2/4 flex flex-col items-start xs:items-center sm:items-start xs:text-center sm:text-start gap-5">
            <img src={mmLogoGray} alt="logo" className="w-[11.25rem]" />
            <p className="text-[0.938rem]">{footerInputs.description}</p>
            <div className="flex justify-center items-center gap-3">
              <Link to={'https://www.facebook.com/'} target="_blank">
                <i className="text-accent cursor-pointer">
                  <FaFacebook size={25} />
                </i>
              </Link>
              <Link to={'https://www.pinterest.com/'} target="_blank">
                <i className="text-accent cursor-pointer">
                  <FaPinterest size={25} />
                </i>
              </Link>
              <Link to={'https://www.reddit.com/'} target="_blank">
                <i className="text-accent cursor-pointer">
                  <FaReddit size={25} />
                </i>
              </Link>
              <Link to={'https://www.snapchat.com/'} target="_blank">
                <i className="text-accent cursor-pointer">
                  <FaSnapchat size={25} />
                </i>
              </Link>
            </div>
            <p>
              Pricavy Policy | &copy; &nbsp;
              <span>{new Date().getFullYear()}</span>
              &nbsp; <span className="whitespace-nowrap">Muscle Mansion</span>
            </p>
          </div>
          <div className="flex flex-col xs:flex-row xs:justify-evenly items-start xs:items-center gap-8 w-full">
            <div>
              <h2 className="relative font-bold text-[1.375rem] text-black/75 capitalize whitespace-nowrap">
                {footerInputs.programs.title}
                <span className="w-20 h-1 absolute bottom-[-8px] left-0 bg-primary"></span>
              </h2>
              {footerInputs.programs.classes.map((c) => (
                <p
                  key={c}
                  className="my-5 font-medium hover:scale-[1.05] origin-left hover:text-primary cursor-pointer whitespace-nowrap last:mb-0"
                >
                  {c}
                </p>
              ))}
            </div>
            <div className="pr-0 lg:pr-16">
              <h2 className="relative font-bold text-[1.375rem] text-black/75 capitalize whitespace-nowrap">
                {footerInputs.Hours.title}
                <span className="w-20 h-1 absolute bottom-[-8px] left-0 bg-primary"></span>
              </h2>
              {footerInputs.Hours.schedule.map((sched) => (
                <p
                  key={sched}
                  className="my-5 font-medium last:mb-0 even:font-bold whitespace-nowrap"
                >
                  {sched}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
