import React from "react";

import "./OrderReport.scss";
import { Filter, OrderReportItem } from "@/components";

export const OrderReport = () => {
  return (
    <div className="order-report">
      <div className="head">
        <h3 className="head__title">Order Report</h3>

        <Filter />
      </div>

      <div className="order-report__table">
        <div className="order-report__table-header">
          <div>Customer</div>
          <div>Menu</div>
          <div>Total Payment</div>
          <div>Status</div>
        </div>

        <div className="order-report__content">
          <OrderReportItem />
          <OrderReportItem />
          <OrderReportItem />
          <OrderReportItem />
        </div>
      </div>
    </div>
  );
};
