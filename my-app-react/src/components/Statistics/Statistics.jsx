import PropTypes from "prop-types";
import StatisticsStyles from "./Statistics.module.css";
const Statistics = ({ prop }) => {
  return (
    <>
      <ul className={StatisticsStyles.wrapper}>
      

           {Object.keys(prop).map((item) => (
             <li key={item} >
               {item}: <span>{prop[item]}</span>
             </li>
           ))}
     
     
      </ul>
    </>
  );
};

export default Statistics;
