import { Title, Features } from '../components';
import { features } from '../constants';

const Featured = () => {
  const limitDisplay = features.slice(0, 6);

  return (
    <section>
      <div className="container w-full bg-white mt-20 mb-[180px] flex flex-col items-center justify-center font-montserrat">
        <Title
          text={'our featured class'}
          bgSize={'w-[280px]'}
          textColor={'text-white'}
          textWeight={'font-bold'}
        />
        <h1 className="capitalize mt-10 mb-10 text-center text-4xl text-black font-bold ">
          we are offering best flexible classes
        </h1>
        <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-4">
          {limitDisplay.map((item) => (
            <Features
              key={item.name}
              itemImg={item.itemImg}
              itemIcon={item.itemIcon}
              name={item.name}
              schedule={item.schedule}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
