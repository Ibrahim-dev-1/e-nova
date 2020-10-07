import React from "react";
import Router from "next/router";
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,
  LogoutButton,
} from "./sidebar.style";

import { FormattedMessage } from "react-intl";
import {
  PROFILE_SIDEBAR_TOP_MENU,
  PROFILE_SIDEBAR_BOTTOM_MENU,
} from "../../site-settings/site-navigation";

const SidebarCategory: React.FC<{}> = () => {
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      //localStorage.removeItem("access_token");
      //authDispatch({ type: "SIGN_OUT" });
      console.log("logout");
      Router.push("/");
    }
  };
  return (
    <>
      <SidebarWrapper>
        <SidebarTop>
          {PROFILE_SIDEBAR_TOP_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
        </SidebarTop>

        <SidebarBottom>
          {PROFILE_SIDEBAR_BOTTOM_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
          <LogoutButton type="button" onClick={handleLogout}>
            <FormattedMessage id="nav.logout" defaultMessage="Logout" />
          </LogoutButton>
        </SidebarBottom>
      </SidebarWrapper>
    </>
  );
};

export default SidebarCategory;
