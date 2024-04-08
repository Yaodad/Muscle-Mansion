import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Story = ({ date, title, paragraph }) => {
  return (
    <div className="max-w-[370px] font-montserrat bg-[#F8E8EE] shadow-xl p-8">
      <p className="border-[1px] border-secondary inline rounded-3xl py-2 px-5 font-bold tracking-widest text-sm">
        {date}
      </p>
      <h1 className="font-bold text-2xl capitalize mt-7 line-clamp-2">
        {title}
      </h1>
      <p className="text-sm text-secondary font-medium line-clamp-4 my-4">
        {paragraph}
      </p>
      <Link
        to={'/blog'}
        className="bg-primary hover:bg-primary/85 flex justify-center items-center gap-2 w-[9.375rem] text-white py-[0.938rem] px-5 text-sm font-bold uppercase whitespace-nowrap transition-all duration-200 ease-in-out cursor-pointer"
      >
        read more
        <i>
          <FaArrowAltCircleRight />
        </i>
      </Link>
    </div>
  );
};

export default Story;
