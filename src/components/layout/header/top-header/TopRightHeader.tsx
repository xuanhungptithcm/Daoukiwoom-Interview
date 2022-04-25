import { ReactElement } from "react";
import { ReactComponent as DownIconSVG } from "../../../../assets/icons/svg/down.svg";
import "./topHeader.scss";

const TopRightHeader = (): ReactElement => {
  return (
    <div className="container-top-header">
      <div className="top-menu">
        <ul className="menus">
          <li className="menu-item">
            <span>EN</span>
            <DownIconSVG />
          </li>
          <li className="menu-item">
            <span>Company</span>
            <DownIconSVG />
          </li>
          <li className="menu-item">
            <span>Partner Market Place</span>
            <DownIconSVG />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopRightHeader;
