import { Button } from '../components';

const Class = ({ itemImg, itemIcon, name, schedule }) => {
  return (
    <div className="group relative overflow-hidden w-full lg:max-w-[380px] h-[420px] rounded-lg font-montserrat">
      <img
        src={itemImg}
        alt={name}
        className="w-full h-full object-cover grayscale-[77%]"
      />
      <div className="absolute top-3 left-3 grid place-content-center w-16 h-16 bg-white/25 group-hover:bg-white transition-all duration-500 rounded-full">
        <img
          src={itemIcon}
          alt={`${name} icon`}
          className="w-[40px] transition-all duration-500 group-hover:filter-primary"
        />
      </div>
      <h3 className="absolute bottom-36 left-[50%] translate-x-[-50%] z-10 text-white font-bold text-3xl capitalize whitespace-nowrap">
        {name}
      </h3>
      <p className="absolute bottom-[106px] left-[50%] translate-x-[-50%] z-10 lg:text-[14.5px] text-white whitespace-nowrap capitalize bg-primary/50 font-medium px-2 py-1">
        {schedule}
      </p>
      <div className="absolute bottom-6 left-[50%] translate-x-[-50%] z-10">
        <Button
          text={'join now'}
          color={'btnWhite'}
          arrowColor={'text-primary'}
          route={'/contact'}
        />
      </div>
    </div>
  );
};

export default Class;
