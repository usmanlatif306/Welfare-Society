import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      {/* <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      /> */}

      <CHeaderNav className="mr-auto pl-md-3">
        <CHeaderNavItem className="px-1">
          <CHeaderNavLink to="/">Home</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-1">
          <CHeaderNavLink to="/donations">Donations</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-1">
          <CHeaderNavLink to="/expenditures">Expenditures</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-1">
          <CHeaderNavLink to="/blood-donations">Blood</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-1">
          <CHeaderNavLink to="/add_data">Add</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      {/* <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav> */}
    </CHeader>
  );
};

export default TheHeader;
