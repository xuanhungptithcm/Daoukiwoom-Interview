import { ReactElement } from "react";
import { ReactComponent as LogoSVG } from "../../../../assets/icons/svg/logo.svg";
import { ReactComponent as HomeIconSVG } from "../../../../assets/icons/svg/home.svg";
import "./menuHeader.scss";
import { Link } from "react-router-dom";

const MenuHeader = (): ReactElement => {
  return (
    <div className="container-menu-header">
      <div className="menu-header">
        <div className="logo">
          <Link to="/">
            <LogoSVG />
          </Link>
        </div>
        <ul className="menus">
          <li className="menu-item active">
            <HomeIconSVG />
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/home">Auto Homepage</a>
          </li>
          <li className="menu-item">
            <a href="/sales">Sales</a>
          </li>
          <li className="menu-item">
            <a href="/cmr">CRM</a>
          </li>
          <li className="menu-item">
            <a href="/electronic-office">Electronic office</a>
          </li>
          <li className="menu-item">
            <a href="/cloud-erp">Cloud ERP</a>
          </li>
          <li className="menu-item">
            <a href="/ssl">SSL</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
