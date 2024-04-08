import { Title, Price } from '../components';
import { pricingInputs } from '../constants';

const Pricing = () => {
  return (
    <section className="bg-abstract">
      <div className="container py-[90px]">
        <div className="flex flex-col items-center justify-center mb-14 gap-4 text-center font-montserrat">
          <Title
            text={'pricing chart'}
            bgSize={'w-[240px]'}
            textColor={'text-white'}
            textWeight={'font-bold'}
          />
          <h1 className="font-bold text-4xl mt-5">{pricingInputs.subject}</h1>
          <p className="text-secondary font-medium whitespace-pre-wrap max-w-[609px]">
            {pricingInputs.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {pricingInputs.prices.map((type) => (
            <Price
              key={type.type}
              img={type.img}
              type={type.type}
              amount={type.amount}
              benefits={type.benifits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
