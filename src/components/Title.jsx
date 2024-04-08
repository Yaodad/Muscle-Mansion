import { paintStroke } from '../assets/images';

const Title = ({ text, bgSize, textColor, textSize, textWeight }) => {
  return (
    <div className={`relative ${bgSize}`}>
      <p
        className={`relative font-montserrat uppercase text-center left-2 z-[1] ${textColor} ${textSize} ${textWeight}`}
      >
        {text}
      </p>
      <img
        src={paintStroke}
        alt="paint"
        className={`absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full`}
      />
    </div>
  );
};

export default Title;
