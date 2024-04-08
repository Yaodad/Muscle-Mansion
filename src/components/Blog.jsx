import { FaLayerGroup } from 'react-icons/fa';
import { Button } from '../components';

const Blog = ({ img, date, topic, title, parag }) => {
  return (
    <article className="font-montserrat mb-7 last:mb-5">
      <img
        src={img}
        alt="article-pic"
        className="object-cover object-bottom w-full h-[300px] sm:h-[432px]"
      />
      <p className="text-[14px] text-secondary capitalize pt-[10px] pb-5">
        <i className="text-primary inline-block mr-2">
          <FaLayerGroup />
        </i>
        Posted by <strong>Admin </strong>| {date} | {topic}
      </p>
      <h2 className="text-3xl font-bold capitalize mb-5">{title}</h2>
      <p className="font-medium text-secondary mb-[36px]">{parag}</p>
      <Button text={'Purchase Now'} color={'btnPink'} route={'/contact'} />
    </article>
  );
};

export default Blog;
