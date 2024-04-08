import { useState } from 'react';

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight == 0 || height == 0) {
      alert('Please fill out all required fields');
      setBmi('');
      setBmiCategory('');
    }

    const calculatedBmi = ((weight / height / height) * 10000).toFixed(1);

    if (calculatedBmi < 18.5) {
      setBmiCategory('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setBmiCategory('Normal');
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setBmiCategory('Overweight');
    } else if (calculatedBmi > 30) {
      setBmiCategory('Obesity');
    }

    setBmi(calculatedBmi.toString());
  };
  return (
    <section className="bg-bmi bg-cover bg-no-repeat bg-right-top">
      <div className="container py-2 backdrop-blur-sm md:backdrop-blur-none backdrop-brightness-[.25] lg:backdrop-brightness-100 transition-all duration-500 ease-in-out">
        <div className="w-full lg:w-2/4 font-montserrat text-white h-auto my-14 pr-0 sm:pr-10 mx-auto sm:mx-0">
          <h1 className="font-bold text-[40px] capitalize text-center xs:text-start sm:whitespace-nowrap">
            Let's Calculate Your <span className="text-primary">BMI</span>
          </h1>
          <p className="font-medium text-semi-light-gray mt-2 mb-6 max-w-[500px]">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <form
            className="grid sm:grid-cols-2 sm:gap-5 font-medium max-w-[500px]"
            onSubmit={calculateBMI}
          >
            <input
              type="number"
              placeholder="Weight / kg"
              min={1}
              max={2000}
              step={0.01}
              required
              className="px-2 py-2 bg-transparent font-normal border-2 border-light-gray rounded-sm"
              onChange={(e) => {
                setWeight(e.target.value);
                if (e.target.value == '') {
                  setBmi('');
                }
              }}
            />
            <input
              type="number"
              placeholder="Height / cm"
              min={1}
              max={2000}
              step={0.01}
              required
              className="px-2 py-2 my-3 sm:my-0 bg-transparent font-normal border-2 border-light-gray rounded-sm"
              onChange={(e) => {
                setHeight(e.target.value);
                if (e.target.value == '') {
                  setBmiCategory('');
                }
              }}
            />
            <p className="text-sm mt-2 sm:mt-0">
              Your BMI is: &nbsp;
              <span className="text-primary uppercase font-bold">{bmi}</span>
            </p>
            <p className="text-sm mt-1 sm:mt-0 mb-5 sm:mb-0">
              Your weight is: &nbsp;
              <span className="text-primary uppercase font-bold">
                {bmiCategory}
              </span>
            </p>
            <input
              type="submit"
              value="Calculate"
              className="bg-secondary hover:bg-primary w-[150px] h-[50px] text-sm font-bold uppercase transition-all duration-200 ease-in-out cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
