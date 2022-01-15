import PropTypes from "prop-types";
import SectionStyles from "./Section.module.css"
const Section = (props) => {
  return (
    <section>
      <h2 className={SectionStyles.title}>{props.title}</h2>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
export default Section;
