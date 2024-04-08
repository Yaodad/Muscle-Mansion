import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { Label, Class, DocumentTitle } from '../components';
import { features } from '../constants';

const ClassesPage = () => {
  DocumentTitle('Classes • Muscle Mansion');
  const [showMore, setShowMore] = useState(false);
  const limitDisplay = showMore ? features : features.slice(0, 6);

  return (
    <main>
      <Label text={'classes'} />
      <section className="bg-abstract">
        <div className="container">
          <div className="flex flex-wrap flex-row justify-center items-center gap-4 pt-[90px]">
            {limitDisplay.map((item) => (
              <Class
                key={item.name}
                itemImg={item.itemImg}
                itemIcon={item.itemIcon}
                name={item.name}
                schedule={item.schedule}
              />
            ))}
          </div>
          <div className="flex just items-center mt-11 pb-[90px]">
            <button
              className="bg-primary hover:bg-primary/85 w-[178px] text-white font-montserrat whitespace-nowrap mx-auto py-4 px-8 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? (
                <span className="flex justify-center items-center gap-2">
                  Show less
                  <FaChevronUp size={14} />
                </span>
              ) : (
                <span className="flex justify-center items-center gap-2">
                  Show more
                  <FaChevronDown size={14} />
                </span>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClassesPage;
