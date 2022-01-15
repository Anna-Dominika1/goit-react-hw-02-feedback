import PropTypes from "prop-types";
import NotificationStyles from"./Notification.module.css"
const Notification = ({ message }) => {
  return <h2 className={NotificationStyles.message}>{message}</h2>;
};
Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
