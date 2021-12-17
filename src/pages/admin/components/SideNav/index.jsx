import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import adminStorageKeys from "../../../../constant/admin-storage-keys";
import { useNavigate } from "react-router-dom";
SideNav.propTypes = {};

function SideNav(props) {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(adminStorageKeys.TOKEN);
    navigate("/admin");
  };
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Administrator
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Users
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>Profit</p>
              </a>
            </li>
          </ul>
          {/* log out */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <form>
              <Button variant="outlined" type="submit" onClick={logout}>
                Log out
              </Button>
            </form>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default SideNav;
