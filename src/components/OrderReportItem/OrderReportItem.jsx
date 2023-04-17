import React from 'react';

import "./OrderReportItem.scss";


export const OrderReportItem = () => {


  return (
    <div className='order-report-item'>
      <div className="order-report-item__customer">
        <div className='order-report-item__avatar'>
          <img src="images/users/user001.png" alt="avatar" />
        </div>

        <div className='order-report-item__username'>Eren Jaegar</div>
      </div>

      <div className='order-report-item__dish'>Spicy seasoned seafood noodles </div>
      <div className='order-report-item__total-payment'>$125</div>
      <div className='order-report-item__status'>
        <span className='status-badge orange'>Completed</span>
      </div>
    </div>
  );
};