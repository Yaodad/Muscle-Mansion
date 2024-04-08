import { Card, Title, Button } from '../components';
import { cardInputs, whoInputs } from '../constants';
import { running } from '../assets/images';

const Who = () => {
  return (
    <section className="who-section bg-abstract">
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
          {cardInputs.map((input) => (
            <Card
              key={input.title}
              icon={input.icon}
              title={input.title}
              description={input.description}
            />
          ))}
        </div>
        <div className="flex justify-center lg:justify-between items-center gap-5">
          <div className="flex flex-col items-center justify-center font-montserrat lg:items-start text-center lg:text-start my-16">
            <Title
              text={'who we are'}
              bgSize={'w-[240px]'}
              textColor={'text-white'}
              textWeight={'font-bold'}
            />
            <h1 className="capitalize pt-10 pb-4 text-4xl text-black font-bold">
              {whoInputs.subject}
            </h1>
            <p className="text-secondary font-medium lg:pr-11 pb-10">
              {whoInputs.description}
            </p>
            <div className="flex flex-col sm:flex-row mb-20">
              {whoInputs.offers.map((offer) => (
                <div
                  key={offer.name}
                  className="flex flex-col items-center justify-center gap-5 sm:gap-7 text-center px-5 py-5 sm:even:border-x-[1px] border-secondary/25"
                >
                  <img
                    src={offer.icon}
                    alt={offer.name}
                    width={'54px'}
                    height={'54px'}
                  />
                  <h3 className="text-xl font-bold uppercase">{offer.name}</h3>
                </div>
              ))}
            </div>
            <Button text={'Take A Tour'} color={'btnGray'} route={'/classes'} />
          </div>
          <figure className="hidden lg:block">
            <img src={running} alt="running" width={'515'} height={'672px'} />
            <figcaption className="offscreen">Running</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Who;
