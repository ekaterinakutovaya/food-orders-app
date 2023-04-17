import React from "react";

import "./UserLayout.scss";
import { Sidebar } from "@/components";
import { userNavigation } from "../../utils/constants";
import { UserHeader } from "../../components";

export const UserLayout = ({ children }) => {
  return (
    <div>
      <Sidebar items={userNavigation} />

      <UserHeader />

      {/* <div className="wrapper"> */}
        {children}
      {/* </div> */}
    </div>
  );
};
