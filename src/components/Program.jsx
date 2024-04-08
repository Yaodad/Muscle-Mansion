import { useOutletContext, Link } from 'react-router-dom';

const Program = () => {
  const [cname, time, trainer] = useOutletContext();

  return (
    <>
      <li className="bg-[#f2f2f2] border-[1px] border-semi-light-gray/20 w-full grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 sm:px-6 md:px-8 py-6 text-center md:text-start shadow-md">
        <div>
          <p className="text-[14px]">Class Name</p>
          <p className="md:text-[15px] lg:text-[18px] font-bold whitespace-nowrap">
            {cname}
          </p>
        </div>
        <div className="md:text-center lg:text-start">
          <p className="text-[14px]">Time</p>
          <p className="md:text-[15px] lg:text-[18px] font-bold whitespace-nowrap">
            {time}
          </p>
        </div>
        <div className="md:justify-self-end lg:justify-self-start">
          <p className="text-[14px]">Trainer</p>
          <p className="md:text-[15px] lg:text-[18px] font-bold whitespace-nowrap">
            {trainer}
          </p>
        </div>
        <Link
          to={'/contact'}
          className="w-9/12 bg-secondary justify-self-center md:col-span-3 lg:col-span-1 rounded-3xl text-center text-white text-[14px] lg:text-[15px] font-medium capitalize whitespace-nowrap px-6 py-3 hover:bg-primary transition-all duration-300 ease-in-out"
        >
          join now
        </Link>
      </li>
    </>
  );
};

export default Program;
