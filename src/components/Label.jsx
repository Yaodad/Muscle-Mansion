const Label = ({ text }) => {
  return (
    <section className="relative bg-banner bg-cover bg-no-repeat bg-[78%] lg:bg-right-top ">
      <div className="w-full h-[250px] backdrop-blur-sm md:backdrop-blur-none backdrop-brightness-[.25] lg:backdrop-brightness-100 transition-all duration-500 ease-in-out">
        <h1 className="absolute left-[50%] bottom-5 translate-x-[-50%] capitalize font-montserrat font-bold text-white text-4xl text-center">
          {text}
        </h1>
      </div>
    </section>
  );
};

export default Label;
