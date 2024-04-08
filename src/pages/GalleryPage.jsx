import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Label, DocumentTitle } from '../components';
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
} from '../assets/images';

const GalleryPage = () => {
  DocumentTitle('Gallery • Muscle Mansion');

  const { pageNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageNumber !== currentPage) {
      navigate(`/gallery/${currentPage}`);
    }
  }, [pageNumber]);

  const pictures = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
  ];
  const [currentPage, setCurrectPage] = useState(1);

  const picturesPerPage = 6;
  const lastIndex = currentPage * picturesPerPage;
  const firstIndex = lastIndex - picturesPerPage;
  const picturesDisplay = pictures.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(pictures.length / picturesPerPage);
  const numberOFNav = [...Array(numberOfPages + 1).keys()].slice(1);

  // handle prev button
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrectPage(currentPage - 1);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }
  };

  const changePage = (n) => {
    setCurrectPage(n);
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  // handle next button
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrectPage(currentPage + 1);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Label text={'gallery'} />
      <section className="bg-abstract py-[90px]">
        <div className="container">
          <Outlet context={picturesDisplay} />

          <nav>
            <ul className="flex justify-center items-center gap-2 font-montserrat text-primary text-[18px] font-medium mt-11">
              <li>
                <NavLink
                  to={`/gallery/${
                    currentPage !== 1 ? currentPage - 1 : currentPage
                  }`}
                  className={`w-[74px] h-[46px] grid place-content-center shadow-xl shadow-slate-400/50 rounded-md bg-slate-200 border-[1px] border-semi-light-gray/25 transition-all duration-150 ease-in-out ${
                    currentPage === 1
                      ? 'text-semi-light-gray cursor-default'
                      : 'hover:bg-primary hover:text-white'
                  }`}
                  onClick={prevPage}
                >
                  Prev
                </NavLink>
              </li>
              {numberOFNav.map((n) => (
                <li key={n}>
                  <NavLink to={`/gallery/${n}`}>
                    <button
                      className={`w-[46px] h-[46px] shadow-xl shadow-slate-400/50 rounded-md hover:bg-primary hover:text-white transition-all duration-150 ease-in-out ${
                        currentPage === n
                          ? 'bg-primary text-white'
                          : 'bg-slate-200 '
                      }`}
                      onClick={() => {
                        changePage(n);
                      }}
                    >
                      {n}
                    </button>
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to={`/gallery/${
                    currentPage !== numberOfPages
                      ? currentPage + 1
                      : currentPage
                  }`}
                  className={`w-[74px] h-[46px] grid place-content-center shadow-xl shadow-slate-400/50 rounded-md bg-slate-200 border-[1px] border-semi-light-gray/25 transition-all duration-150 ease-in-out ${
                    currentPage === numberOfPages
                      ? 'text-semi-light-gray cursor-default link-d'
                      : 'hover:bg-primary hover:text-white'
                  }`}
                  onClick={nextPage}
                >
                  Next
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
