import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from './sections';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
