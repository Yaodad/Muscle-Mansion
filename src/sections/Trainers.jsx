import { Title, Coach } from '../components';
import { trainersInputs } from '../constants';

const Trainers = () => {
  return (
    <section>
      <div className="container my-[90px]">
        <div className="flex flex-col items-center justify-center mb-16 gap-4 text-center font-montserrat">
          <Title
            text={'gym trainers'}
            bgSize={'w-[240px]'}
            textColor={'text-white'}
            textWeight={'font-bold'}
          />
          <h1 className="font-bold text-4xl mt-5">{trainersInputs.subject}</h1>
          <p className="text-secondary font-medium whitespace-pre-wrap">
            {trainersInputs.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trainersInputs.coaches.map((coach) => (
            <Coach
              key={coach.name}
              photo={coach.photo}
              name={coach.name}
              title={coach.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
