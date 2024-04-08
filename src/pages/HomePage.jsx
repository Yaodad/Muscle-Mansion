import {
  Hero,
  Who,
  Featured,
  Choose,
  Trainers,
  Testimonial,
  Bmi,
  Pricing,
  Blog,
  Cta,
} from '../sections';
import { DocumentTitle } from '../components';

const HomePage = () => {
  DocumentTitle('Muscle Mansion');
  return (
    <main>
      <Hero />
      <Who />
      <Featured />
      <Choose />
      <Trainers />
      <Testimonial />
      <Bmi />
      <Pricing />
      <Blog />
      <Cta />
    </main>
  );
};

export default HomePage;
