import { ReactElement } from "react";
import MenuHeader from "./menu/MenuHeader";
import TopRightHeader from "./top-header/TopRightHeader";

const LayoutHeader = (): ReactElement => {
  return (
    <div className="layout-header">
      <header className="header">
        <MenuHeader />
        <TopRightHeader />
      </header>
    </div>
  );
};

export default LayoutHeader;
