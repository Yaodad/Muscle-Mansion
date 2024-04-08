const Features = ({ itemImg, itemIcon, name, schedule }) => {
  return (
    <div className="group relative overflow-hidden h-[300px] lg:first:col-span-2 lg:last:col-span-2">
      <img
        src={itemImg}
        alt={name}
        className="w-full h-full object-cover grayscale scale-105 transition-all duration-500 ease-in-out hover:grayscale-0 hover:scale-150 cursor-pointer"
      />
      <div className="absolute top-3 left-3 grid place-content-center w-16 h-16 bg-white/25 group-hover:bg-white transition-all duration-500 rounded-full">
        <img
          src={itemIcon}
          alt={`${name} icon`}
          className="w-[40px] transition-all duration-500 group-hover:filter-primary"
        />
      </div>
      <h3 className="absolute bottom-14 left-3 z-10 text-white font-bold text-3xl capitalize">
        {name}
      </h3>
      <p className="absolute bottom-5 left-3 lg:text-[14.5px] text-white z-10 capitalize bg-primary px-2 py-1">
        {schedule}
      </p>
    </div>
  );
};

export default Features;
