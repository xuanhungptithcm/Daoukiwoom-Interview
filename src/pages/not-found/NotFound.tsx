import { Link } from "react-router-dom";
import { PRIVATE_PATH } from "../../components/routing/constants";
import "./not-found.scss";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="image">
        <img src="assets/icons/jpg/404.jpg" alt="" />
      </div>
      <div className="title">Oops!</div>
      <div className="description">
        We can’t seem to find the page you are looking for
      </div>
      <div className="help-link">
        <Link to={PRIVATE_PATH.DASHBOARD}>Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
