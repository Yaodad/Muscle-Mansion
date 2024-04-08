import { Title, Story } from '../components';
import { blogCardInputs } from '../constants';

const Blog = () => {
  return (
    <section>
      <div className="container my-[90px]">
        <div className="flex flex-col items-center justify-center mb-14 gap-4 text-center font-montserrat">
          <Title
            text={'Latest Blogs'}
            bgSize={'w-[240px]'}
            textColor={'text-white'}
            textWeight={'font-bold'}
          />
          <h1 className="font-bold text-4xl mt-5">{blogCardInputs.subject}</h1>
          <p className="text-secondary font-medium whitespace-pre-wrap max-w-[609px]">
            {blogCardInputs.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {blogCardInputs.cards.map((card) => (
            <Story
              key={card.date}
              date={card.date}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
