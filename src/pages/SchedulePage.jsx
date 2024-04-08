import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Label, DocumentTitle } from '../components';
import { schedulePageInputs } from '../constants';

const SchedulePage = () => {
  DocumentTitle('Schedule • Muscle Mansion');

  const { day } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (day !== selectedDay) {
      navigate(`/schedule/${selectedDay}`);
    }
  });

  const [selectedDay, setSelectedDay] = useState('mon');

  const handleClick = (day) => {
    setSelectedDay(day);
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  return (
    <main>
      <Label text={'Schedule'} />
      <section className="bg-abstract">
        <div className="container py-[90px]">
          <div className="flex justify-center items-start gap-6 font-montserrat">
            <ul>
              {Object.keys(schedulePageInputs.schedules).map((day) => (
                <li key={day} className="mb-4 last:mb-0">
                  <Link to={`/schedule/${day}`}>
                    <button
                      className={`w-[65px] px-3 py-4 border-[1px] rounded-xl font-bold capitalize text-center shadow-md cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ease-in-out ${
                        selectedDay === day
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-black border-semi-light-gray/60'
                      }`}
                      onClick={() => handleClick(day)}
                    >
                      {day}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="font-montserrat w-full flex flex-col sm:flex-row flex-wrap md:flex-col justify-start items-center gap-3">
              {schedulePageInputs.schedules[selectedDay].map((prog, i) => (
                <Outlet
                  key={i}
                  context={[prog.cname, prog.time, prog.trainer]}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SchedulePage;
