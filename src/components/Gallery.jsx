import { useOutletContext } from 'react-router-dom';

const Gallery = () => {
  const picturesDisplay = useOutletContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {picturesDisplay.map((pic, i) => (
        <img key={i} src={pic} alt="picture" className="mx-auto " />
      ))}
    </div>
  );
};

export default Gallery;
