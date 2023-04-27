import React from "react";

import "./UserHeader.scss";
import { SearchInput } from "@/components";

export const UserHeader = () => {
  return (
      <header className="user-header">
        <div className="user-header__info">
          <h1 className="user-header__title">Jaegar Resto</h1>
          <div className="user-header__date">Tuesday, 2 Feb 2021</div>
        </div>
      </header>
  );
};