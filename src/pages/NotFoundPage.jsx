import { NavLink, useSearchParams } from 'react-router-dom';
import { DocumentTitle } from '../components';
import { mmLogoGray, skeleton } from '../assets/images';

const NotFoundPage = () => {
  DocumentTitle('Error 404 (Not Found) • Muscle Mansion');
  const path = window.location.pathname;

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 my-28">
        <div className="text-[15px] max-w-[300px]">
          <NavLink to={'/'}>
            <img src={mmLogoGray} alt="logo" width={'150px'} />
          </NavLink>
          <p className="font-bold my-[22px]">
            404.
            <span className="text-secondary font-normal">
              &nbsp;That's an error.
            </span>
          </p>
          <p>
            The requested URL&nbsp;
            <span className="whitespace-nowrap text-primary">
              {path.substring(0, 18)}
            </span>
            &nbsp;was not found on this server.
            <span className="text-secondary">&nbsp;That's all we know.</span>
          </p>
        </div>
        <img
          src={skeleton}
          alt="skeleton"
          width={'280px'}
          className="hidden md:flex"
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
