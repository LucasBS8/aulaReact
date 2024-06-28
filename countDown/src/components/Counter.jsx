import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({title, number }) => {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
  
};
Counter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default Counter;
