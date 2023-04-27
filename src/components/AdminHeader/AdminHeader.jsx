import React from "react";

import "./AdminHeader.scss";


export const AdminHeader = ({title, date}) => {
  return (
    <div className="wrapper">
      <header className="admin-header">
        <div className="admin-header__inner">
          <div className="admin-header__info">
            <h1 className="admin-header__title">{title}</h1>
            <div className="admin-header__date">{date}</div>
          </div>

        </div>
      </header>
    </div>
  );
};
