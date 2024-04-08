import { Button, Title } from '../components';
import { chooseImg } from '../assets/images';
import { chooseInputs } from '../constants';

const Choose = () => {
  return (
    <section className="bg-abstract-black bg-cover bg-no-repeat bg-center">
      <div className="relative bottom-[90px] left-0 bg-featured-cta bg-no-repeat h-[180px] bg-center bg-cover">
        <div className="container h-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-8 lg:gap-20">
          <h2 className="font-montserrat font-bold text-center md:text-start text-lg xs:text-2xl sm:text-3xl lg:text-4xl text-white whitespace-nowrap">
            We Are Always Providing Best
            <br />
            Fitness Service For You
          </h2>
          <Button
            text={'join with us'}
            color={'btnWhite'}
            arrowColor={'text-primary'}
            route={'/contact'}
          />
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-10 pb-[80px]">
        <img
          src={chooseImg}
          alt="muscle-man"
          width={'426px'}
          height={'496px'}
          className="lg:w-2/4 h-full"
        />
        <div className="lg:w-2/4 font-montserrat text-white text-center lg:text-start flex flex-col justify-center items-center lg:items-start gap-8 pt-5 lg:pt-0">
          <Title
            text={'why choose us'}
            bgSize={'w-[240px]'}
            textColor={'text-white'}
            textWeight={'font-bold'}
          />
          <h1 className="capitalize font-bold text-4xl">
            {chooseInputs.subject}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: chooseInputs.description }}
            className="text-semi-light-gray"
          />
          <div className="grid sm:grid-cols-2 justify-start items-center gap-5 mb-10">
            {chooseInputs.items.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt="smaple"
                  width={'70px'}
                  className="bg-light-gray/15 hover:bg-primary rounded-full p-3 transition-all duration-300 ease-in-out cursor-pointer"
                />
                <h2 className="whitespace-pre font-montserrat font-bold text-lg capitalize">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
          <Button
            text={'Our Classes'}
            color={'btnLightGray'}
            route={'/classes'}
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
