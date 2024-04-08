import { Link } from 'react-router-dom';
import { Label, Map, DocumentTitle } from '../components';
import { contactPageInputs } from '../constants';

const ContactPage = () => {
  DocumentTitle('Contact • Muscle Mansion');
  return (
    <main>
      <Label text={'Contact'} />
      <section>
        <div className="container my-[90px]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-16 font-montserrat text-black">
            <div className="flex-1">
              <h1 className="font-bold text-4xl capitalize text-center lg:text-start">
                {contactPageInputs.subject}
              </h1>
              <p className="text-secondary font-medium pt-5 pb-10 text-center lg:text-start">
                {contactPageInputs.description}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {contactPageInputs.infos.map((info, i) => (
                  <div key={i} className="">
                    <h3 className="relative font-bold text-[20px]">
                      <span className="w-14 h-1 absolute bottom-[-6px] left-0 bg-primary"></span>
                      {info.title}
                    </h3>
                    <p className="text-[15px] text-secondary font-medium my-5 whitespace-nowrap">
                      {info.line1}
                      <br />
                      {info.line2}
                    </p>
                  </div>
                ))}
                <div className="lg:max-w-[300px]">
                  <h3 className="relative font-bold text-[20px]">
                    <span className="w-14 h-1 absolute bottom-[-6px] left-0 bg-primary"></span>
                    Information
                  </h3>
                  <p className="text-[15px] text-secondary font-medium my-5 whitespace-nowrap">
                    +63-912-345-6789
                    <br />
                    <span className="text-accent cursor-pointer">
                      <Link to={'mailto:muscle_mansion@example.com'}>
                        muscle_mansion@example.com
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <form className="flex-1 w-full flex flex-col gap-5 py-8 px-11 bg-[#f2f2f2] text-[15px]">
              <h3 className="relative font-bold text-[28px] mb-4">
                <span className="w-14 h-1 absolute bottom-[-6px] left-0 bg-primary"></span>
                Leave Us Your Info
              </h3>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="bg-white px-4 py-3 border-[1px] border-semi-light-gray"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white px-4 py-3 border-[1px] border-semi-light-gray"
              />
              <select
                name="classes"
                id="classes"
                className="bg-white px-4 py-3 border-[1px] border-semi-light-gray"
                defaultValue={'Select Class'}
              >
                <option value="Select Class" disabled hidden>
                  Select Class
                </option>
                {contactPageInputs.programs.map((prog, i) => (
                  <option key={i} value={prog}>
                    {prog}
                  </option>
                ))}
              </select>
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Comment"
                className="bg-white px-4 py-3 border-[1px] border-semi-light-gray focus:border-primary"
              ></textarea>

              <input
                type="submit"
                className="bg-primary hover:bg-primary/85 w-[9.375rem] mx-auto text-white mt-4 py-[0.938rem] px-5 text-sm font-bold uppercase whitespace-nowrap transition-all duration-200 ease-in-out cursor-pointer"
              />
            </form>
          </div>
        </div>
        <Map />
      </section>
    </main>
  );
};

export default ContactPage;
