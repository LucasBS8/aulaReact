import './Title.css';
import PropTypes from "prop-types";
const Title = ({title}) => {
  return <h1 className='title'>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title