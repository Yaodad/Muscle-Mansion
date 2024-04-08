import { Link } from 'react-router-dom';
import { Label, DocumentTitle } from '../components';
import { login, mmLogoGray } from '../assets/images';

const SigninPage = () => {
  DocumentTitle('Sign In • Muscle Mansion');
  return (
    <main>
      <Label text={'Sign In'} />
      <section className="bg-abstract py-[90px]">
        <div className="container">
          <div className="w-full h-[500px] flex justify-center">
            <img
              src={login}
              alt="login-pic"
              width={'450px'}
              className="hidden lg:block"
            />
            <form className="bg-white flex flex-col justify-center gap-1 w-[450px] h-[500px] p-10 font-montserrat shadow-2xl">
              <div className="flex justify-center sm:justify-between items-center mb-3">
                <img src={mmLogoGray} alt="logo" width={'150px'} />
                <h2 className="font-bold text-primary text-3xl hidden sm:block">
                  Sign In
                </h2>
              </div>
              <label htmlFor="email" className="font-semibold text-[14px] mt-5">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="muscle_mansion@example.com"
                className="bg-semi-light-gray/10 p-2 px-3 border-[1px] border-semi-light-gray rounded-md text-light-gray"
              />
              <label
                htmlFor="password"
                className="font-semibold text-[14px] mt-5"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-semi-light-gray/10 p-2 px-3 border-[1px] border-semi-light-gray rounded-md text-light-gray"
              />
              <input
                type="submit"
                value={'Log In'}
                className="w-full text-white text-[14px] font-medium my-5 p-3 rounded-md bg-primary hover:bg-primary/85 transition-all duration-200 ease-in-out cursor-pointer"
              />
              <p className="text-center">
                New to Muscle Mansion?
                <span className="font-semibold text-primary whitespace-nowrap hover:text-primary/85 transition-all duration-200 ease-in-out">
                  <Link to={'/signup'}> Sign Up!</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SigninPage;
