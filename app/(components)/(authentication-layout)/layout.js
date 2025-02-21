"use client"
import Switcher from "@/shared/layout-components/switcher/switcher";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";

const Layout = ({ children }) => {

  const Authentication = () => {
    document.querySelector("html")?.classList.add("h-full");
  };

  useEffect(() => {
    Authentication();
  },[]);

  return (
    <Fragment>
      {children}
      <Switcher />
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {})(Layout);