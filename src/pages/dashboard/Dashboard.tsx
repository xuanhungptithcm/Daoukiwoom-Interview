import Header from "../../components/layout/header/Header";
import "./dashboard.scss";
import { ReactComponent as AssetsIconSVG } from "../../assets/icons/svg/assets.svg";
import { ReactComponent as AccountingIconSVG } from "../../assets/icons/svg/accounting.svg";
import { ReactComponent as HrAdminIconSVG } from "../../assets/icons/svg/hr-admin.svg";
import { ReactComponent as SalesIconSVG } from "../../assets/icons/svg/sales.svg";
import { ReactComponent as CustomerIconSVG } from "../../assets/icons/svg/customer.svg";
import { ReactComponent as SecurityIconSVG } from "../../assets/icons/svg/security.svg";
const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
