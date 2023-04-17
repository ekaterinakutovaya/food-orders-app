import React from 'react';

import "./AdminLayout.scss";
import { adminNavigation } from "../../utils/constants";
import { AdminHeader, Sidebar } from '../../components';

export const AdminLayout = ({children}) => {


    return (
        <div>
      <Sidebar items={adminNavigation} />

      <AdminHeader title={"Settings"} date={""}/>

      {/* <div className="wrapper"> */}
        {children}
      {/* </div> */}
    </div>
    );
};