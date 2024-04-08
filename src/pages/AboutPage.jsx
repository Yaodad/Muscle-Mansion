import { Label, Title, Button, DocumentTitle } from '../components';
import { running } from '../assets/images';
import { aboutPageInputs } from '../constants';

const AboutPage = () => {
  DocumentTitle('About • Muscle Mansion');
  return (
    <main>
      <Label text={'about us'} />
      <section className="bg-abstract-white bg-center bg-cover bg-no-repeat pb-[90px] pt-[50px]">
        <div className="container flex justify-between items-center w-full mb-16 lg:mb-8">
          <div className="lg:w-2/4 mx-auto text-center flex flex-col items-center justify-center lg:text-start lg:items-start">
            <Title
              text={'who we are'}
              bgSize={'w-[240px]'}
              textColor={'text-white'}
              textWeight={'font-bold'}
            />
            <h1 className="capitalize text-4xl text-black font-bold pt-10 pb-4">
              {aboutPageInputs.subject}
            </h1>
            <p className="text-secondary font-medium lg:pr-11 pb-10">
              {aboutPageInputs.description}
            </p>
            <Button text={'Contact Us'} color={'btnPink'} route={'/contact'} />
          </div>
          <figure className="hidden lg:block max-w-[400px] lg:mr-16 xl:mr-24">
            <img src={running} alt="running" width={'515px'} height={'672px'} />
            <figcaption className="offscreen">Running</figcaption>
          </figure>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 font-montserrat text-center shadow-2xl">
            <div className="bg-white flex flex-col items-center justify-center gap-2 p-10">
              <img
                src={aboutPageInputs.mission.icon}
                alt="logo"
                width={'90px'}
                className="max-w-[80px]"
              />
              <h2 className="capitalize text-4xl text-black font-bold">
                {aboutPageInputs.mission.title}
              </h2>
              <p className="text-secondary font-medium">
                {aboutPageInputs.mission.description}
              </p>
            </div>
            <img
              src={aboutPageInputs.mission.img}
              alt="mission-image"
              className="object-cover w-full h-full"
            />
            <img
              src={aboutPageInputs.vision.img}
              alt="vision-image"
              className="order-2 md:-order-none object-cover w-full h-full"
            />
            <div className="bg-white flex flex-col items-center justify-center gap-2 p-10">
              <img
                src={aboutPageInputs.vision.icon}
                alt="logo"
                width={'80px'}
              />
              <h2 className="capitalize text-4xl text-black font-bold">
                {aboutPageInputs.vision.title}
              </h2>
              <p className="text-secondary font-medium">
                {aboutPageInputs.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
