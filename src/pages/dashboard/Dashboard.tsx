import Header from "../../components/layout/header/Header";
import "./dashboard.scss";
import { ReactComponent as AssetsIconSVG } from "../../assets/icons/svg/assets.svg";
import { ReactComponent as AccountingIconSVG } from "../../assets/icons/svg/accounting.svg";
import { ReactComponent as HrAdminIconSVG } from "../../assets/icons/svg/hr-admin.svg";
import { ReactComponent as SalesIconSVG } from "../../assets/icons/svg/sales.svg";
import { ReactComponent as CustomerIconSVG } from "../../assets/icons/svg/customer.svg";
import { ReactComponent as SecurityIconSVG } from "../../assets/icons/svg/security.svg";
import { ReactComponent as CostSymbolIconSVG } from "../../assets/icons/svg/cost-symbol.svg";
import { useMemo } from "react";
const Dashboard = () => {
  const listCost = useMemo(
    () => [
      {
        id: 1,
        title: "Free Test",
        description: "Organize across all apps by hand",
        value: "0",
        isBorder: false,
        isHasBg: false,
        isFree: true,
      },
      {
        id: 2,
        title: "Low Price",
        description: "Monthly Fixed Amount",
        value: "200.000",
        isBorder: false,
        isHasBg: false,
        isFree: false,
      },
      {
        id: 3,
        title: "Easy Using Methods",
        description: "Various Manuals",
        value: "200.000",
        isBorder: true,
        isHasBg: false,
        isFree: false,
      },
      {
        id: 4,
        title: "Verified IT Service",
        description: "On sale in 4 countries",
        value: "300.000",
        isBorder: false,
        isHasBg: true,
        isFree: false,
      },
    ],
    []
  );

  return (
    <div className="dashboard">
      <div className="lading-header">
        <Header></Header>
        <div className="left-menu">
          <h1 className="title">
            <p>Asia IT</p>
            <p>Market Place</p>
          </h1>
        </div>
        <div className="right-menu">
          <div className="tabs">
            <input type="radio" name="tab" id="now-checkbox" />
            <input type="radio" name="tab" id="future-checkbox" />
            <div className="tab-title">
              <label htmlFor="now-checkbox">Now</label>
              <label htmlFor="future-checkbox">Future</label>
            </div>
            <div className="tab-content">
              <div className="tab">
                <div className="grids">
                  <div className="grid">
                    <div className="grid-number">6</div>
                    <div className="grid-text">
                      different IT Software Networks
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-number">32</div>
                    <div className="grid-text">partners</div>
                  </div>
                  <div className="grid">
                    <div className="grid-number">4</div>
                    <div className="grid-text">countries</div>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="grids">
                  <div className="grid">
                    <div className="grid-number">16</div>
                    <div className="grid-text">
                      different IT Software Networks
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-number">62</div>
                    <div className="grid-text">partners</div>
                  </div>
                  <div className="grid">
                    <div className="grid-number">14</div>
                    <div className="grid-text">countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slogan">
        <h2>
          You are now viewing an <strong>IT Software</strong> that has been
          verified by <strong>over 1 million users.</strong>
        </h2>
      </div>
      <div className="grid-service-title">IT CLOUD SEA’S IT SERVICE</div>
      <div className="grid-services">
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <AssetsIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">Assets</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">Inventory Management</div>
                    <div className="label-bg">G-Book</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <AccountingIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">Accounting</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">Accounting</div>
                    <div className="label-bg">G-Book</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <HrAdminIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">HR & Admin</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">Webmail</div>
                    <div className="label-bg">E-office</div>
                  </div>
                  <div className="label-item">
                    <div className="label-text">E- Apporval</div>
                    <div className="label-bg">E-office</div>
                  </div>
                  <div className="label-item">
                    <div className="label-text">E- Document</div>
                    <div className="label-bg">E-office</div>
                  </div>
                  <div className="label-item">
                    <div className="label-text">E- Check in.out</div>
                    <div className="label-bg">E-office</div>
                  </div>
                  <div className="label-item">
                    <div className="label-text">Co-work/Project</div>
                    <div className="label-bg">E-office</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <SalesIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">Sales</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">
                      Create Homepage Youtube & Instagram
                    </div>
                    <div className="label-bg">Fieldmake</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <CustomerIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">Customer</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">
                      Customer Request Management
                    </div>
                    <div className="label-bg">OQUFIE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-service-item">
          <div className="grid-service-container">
            <div className="image">
              <SecurityIconSVG />
            </div>
            <div className="content">
              <div className="labels">
                <div className="label-title">Security</div>
                <div className="label">
                  <div className="label-item">
                    <div className="label-text">SSL server</div>
                    <div className="label-bg">SECTIGO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="costs">
        <div className="costs-container">
          {listCost.map(
            ({ id, description, isBorder, isHasBg, title, value, isFree }) => (
              <div
                className={`cost-item ${isBorder ? "isBorder" : ""} ${
                  isHasBg ? "isHasBg" : ""
                } ${isFree ? "isFree" : ""}`}
                key={id}
              >
                <h3 className="cost-title">{title}</h3>
                <p className="cost-description">{description}</p>
                <div className="cost-per-month">
                  <div className="cost-value">{value}</div>
                  <div className="cost-unit">
                    <div className="cost-unit__symbol">
                      <CostSymbolIconSVG />
                    </div>
                    <div className="cost-unit__time">Per Month</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="contacts">
        <div className="contact-container">
          <div className="contact-item">
            <h3 className="contact-title">Vietnam Office</h3>
            <p className="contact-address">
              14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city
            </p>
            <p className="contact-business">Business resignation: 0315421202</p>
            <p className="contact-phone-email">
              <span className="contact-phone">Tel: 028-3520-2367</span>
              <span className="contact-email">sales@dkinno.com</span>
            </p>
            <p className="contact-copyright">
              Copyright 2021 DaouKiwoom Innovation C0., Ltd
            </p>
          </div>
          <div className="contact-item">
            <h3 className="contact-title">Indonesia Office</h3>
            <p className="contact-address">
              Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI
              Jakarta 12190, Indonsia
            </p>
            <p className="contact-business">Tel: +62-21-5082-0038</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-title">Korea Office</h3>
            <p className="contact-address">
              5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si,
              Gyeonggi-do, Korea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
