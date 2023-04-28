import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import "./AdminLayout.scss";
import { adminNavigation } from "@/utils/constants";
import { AdminHeader, Sidebar, SidebarMobile } from '@/components';

export const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  

  useEffect(() => {
    let string = location.pathname.slice(1);
    setTitle(string.charAt(0).toUpperCase() + string.slice(1))
  }, [location])

  useEffect(() => {
    let d = new Date();
    let formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' });
    setDate(formatter.format(d));
  }, [])

  return (
    <div>
      {/* <Sidebar items={adminNavigation} /> */}
      {/* <SidebarMobile items={adminNavigation}/> */}
      <AdminHeader title={title} date={date} />
        
        {children}

    </div>
  );
};