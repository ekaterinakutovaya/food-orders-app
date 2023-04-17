import React from "react";

import "./SummaryBadge.scss";
import { SvgSelector } from "../../assets/icons/SvgSelector";

export const SummaryBadge = ({ data }) => {
  const { headIcon, statusFigure, statusIcon, total, name, direct } = data;

  // console.log(data);

  return (
    <div className="summary-badge">
      <div
        className={
          direct == "up"
            ? `summary-badge__head green`
            : `summary-badge__head red`
        }
      >
        <div className="summary-badge__icon">
          <SvgSelector id={`${headIcon}`} />
        </div>
        <span className="summary-badge__status-figure">
          {direct == "up" ? `+${statusFigure}%` : `-${statusFigure}%`}
        </span>
        <div className="summary-badge__status-icon">
          <SvgSelector id={`arrow-${direct}`} />
        </div>
      </div>

      <div className="summary-badge__total">{total}</div>
      <div className="summary-badge__name">{name}</div>
    </div>
  );
};
