import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Button = ({ text, color, arrowColor, route }) => {
  return (
    <div className="z-10">
      <Link to={route} className={color}>
        {text}
        <i>
          <FaArrowAltCircleRight className={arrowColor} />
        </i>
      </Link>
    </div>
  );
};

export default Button;
