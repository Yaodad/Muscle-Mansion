import { Label, DocumentTitle } from '../components';
import { Pricing } from '../sections';

const PricingPage = () => {
  DocumentTitle('Pricing • Muscle Mansion');
  return (
    <main>
      <Label text={'Pricing'} />
      <Pricing />
    </main>
  );
};

export default PricingPage;
