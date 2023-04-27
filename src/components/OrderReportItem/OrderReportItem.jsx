import React, { useState } from 'react';

import "./OrderReportItem.scss";
import { statuses } from "@/utils/constants";


export const OrderReportItem = ({item}) => {
  const { userName, userAvatar, menu, totalPayment, status} = item;

  return (
    <div className='order-report-item'>
      <div className="order-report-item__customer">
        <div className='order-report-item__avatar'>
          <img src={userAvatar} alt="avatar" />
        </div>

        <div className='order-report-item__username'>{userName}</div>
      </div>

      <div className='order-report-item__dish'>{menu}</div>
      <div className='order-report-item__total-payment'>$ {totalPayment}</div>
      <div className='order-report-item__status'>
        <span 
          className={`status-badge ${statuses[status].classname}`}
        >{statuses[status].label}</span>
      </div>
    </div>
  );
};