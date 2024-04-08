import { FaSearch, FaChevronRight } from 'react-icons/fa';
import { Label, Blog, DocumentTitle } from '../components';
import { blogPageInputs } from '../constants';
import { ad } from '../assets/images';

const BlogPage = () => {
  DocumentTitle('Blog • Muscle Mansion');
  return (
    <main>
      <Label text={'Blog'} />
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-11 my-[90px] font-montserrat">
          <div className="col-span-2 grid gap-11">
            {blogPageInputs.articles.map((blog) => (
              <Blog
                key={blog.date}
                img={blog.img}
                date={blog.date}
                topic={blog.topic}
                title={blog.title}
                parag={blog.paragraph}
              />
            ))}
          </div>

          <div className="flex flex-col gap-11">
            <div className="flex justify-center items-centertext-secondary">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-[60px] px-5 py-1 border-[1px] border-r-0 border-semi-light-gray rounded-l-lg outline-none"
              />
              <button className="bg-primary h-[60px] px-[18px] text-white rounded-r-lg">
                <i>
                  <FaSearch size={26} />
                </i>
              </button>
            </div>
            <div className="bg-semi-light-gray/15 w-full p-7">
              <h3 className="relative font-bold text-[18px] capitalize whitespace-nowrap">
                Categories
                <span className="w-12 h-1 absolute bottom-[-14px] left-0 bg-primary"></span>
              </h3>
              <ul>
                {blogPageInputs.articles.map((item) => (
                  <li
                    key={item.date}
                    className="flex justify-between items-center mt-8 pb-2 capitalize text-secondary border-b-[1px] border-secondary/30 cursor-pointer hover:text-accent first:mt-11 last:mb-4"
                  >
                    <p className="flex justify-start items-center">
                      <i>
                        <FaChevronRight />
                      </i>
                      &nbsp;{item.topic}
                    </p>
                    <span>({item.total})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-semi-light-gray/15 w-full p-7 capitalize">
              <h3 className="relative font-bold text-[18px] whitespace-nowrap">
                Recent Posts
                <span className="w-12 h-1 absolute bottom-[-14px] left-0 bg-primary"></span>
              </h3>
              <ul>
                {blogPageInputs.articles.map((item) => (
                  <li
                    key={item.date}
                    className="grid grid-cols-3 justify-between items-center gap-4 first:mt-9 mt-6 mb-2 "
                  >
                    <img
                      src={item.img}
                      alt="blog"
                      className="object-cover object-center w-full h-[92px]"
                    />
                    <div className="col-span-2">
                      <p className="text-[14px] text-secondary">{item.date}</p>
                      <h3 className="font-bold cursor-pointer line-clamp-2 mt-2 hover:text-accent">
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-semi-light-gray/15 w-full p-7 capitalize">
              <h3 className="relative font-bold text-[18px] whitespace-nowrap">
                Popular Tags
                <span className="w-12 h-1 absolute bottom-[-14px] left-0 bg-primary"></span>
              </h3>
              <ul>
                {blogPageInputs.articles.map((item) => (
                  <li
                    key={item.date}
                    className="inline-block first:mt-9 mb-2 mr-2 last:mr-0"
                  >
                    <p className="bg-white text-secondary font-medium px-3 py-1 cursor-pointer hover:text-accent">
                      #{item.topic}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={ad}
              alt="mm-advertisment"
              className="object-cover w-full flex md:hidden lg:flex"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
