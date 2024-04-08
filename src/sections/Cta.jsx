import { Button } from '../components';

const Cta = () => {
  return (
    <section className="bg-cta bg-cover bg-no-repeat bg-right-top">
      <div className="container backdrop-blur-sm md:backdrop-blur-none backdrop-brightness-[.25] lg:backdrop-brightness-100 transition-all duration-500 ease-in-out py-16 font-montserrat text-white font-bold capitalize">
        <h1 className="text-4xl">Need a Fitness Trainer?</h1>
        <p className="text-[1.375rem] xs:text-[1.75rem] mt-2 mb-8">
          <span className="text-primary">Call:</span> +63-912-345-6789
        </p>
        <Button text={'Contact Us'} color={'btnPink'} route={'/contact'} />
      </div>
    </section>
  );
};

export default Cta;
