import PropTypes from "prop-types";
import FeedbackOptionsStyles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map((item) => (
          <button
            className={FeedbackOptionsStyles.btn}
            key={item}
            onClick={() => onLeaveFeedback(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
