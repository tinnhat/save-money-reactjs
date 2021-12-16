import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "./components/header";
import HomeAdmin from "./components/home";
import SideNav from "./components/SideNav";
import FooterAdmin from "./components/footer";

AdminPage.propTypes = {};

function AdminPage(props) {
  return (
    <>
      <HeaderAdmin />

      <HomeAdmin />
      <SideNav />
      <FooterAdmin />
    </>
  );
}

export default AdminPage;
