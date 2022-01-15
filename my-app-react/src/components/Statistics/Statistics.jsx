import PropTypes from "prop-types";
import StatisticsStyles from "./Statistics.module.css";
const Statistics = (prop) => {
  return (
    <ul className={StatisticsStyles.wrapper}>
      <li className={StatisticsStyles.list}>
        Good: <span className={StatisticsStyles.text}>{prop.good}</span>
      </li>
      <li className={StatisticsStyles.list}>
        Neutral: <span className={StatisticsStyles.text}>{prop.neutral}</span>
      </li>
      <li className={StatisticsStyles.list}>
        Bad: <span className={StatisticsStyles.text}>{prop.bad}</span>
      </li>
      <li className={StatisticsStyles.list}>
        Total: <span className={StatisticsStyles.text}>{prop.total}</span>
      </li>
      <li className={StatisticsStyles.list}>
        Positive feedbecke:{" "}
        <span className={StatisticsStyles.text}>{prop.positivePercentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
