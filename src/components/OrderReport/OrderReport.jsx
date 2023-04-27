import React, {useState, useEffect} from "react";
import { useQuery } from "@tanstack/react-query";

import "./OrderReport.scss";
import { Filter, OrderReportItem } from "@/components";


export const OrderReport = () => {
  const [statuses, setStatuses] = useState([
    { index: 0, label: 'Preparing', checked: true },
    { index: 1, label: 'Pending', checked: true },
    { index: 2, label: 'Completed', checked: true }
  ]);
  const [param, setParam] = useState('');

  const {isLoading, error, data} = useQuery(
    ['report', param],
    () =>
      fetch(`http://localhost:3000/report?${param}`)
      .then((response) => response.json())
  );

  
  useEffect(() => {
    let getString = statuses.map(status => 
      status.checked ? `status=${status.index}&` : ''
    )
    setParam(prevState => getString.join('').slice(0, -1));
  }, [statuses])
  

  const statusCheckboxHandler = (index) => {
    const statusList = statuses;
    const changeCheckedStatus = statusList.map((item) => (
      item.index === index ? {...item, checked: !item.checked} : item
    ))
    setStatuses(changeCheckedStatus);
  }



  return (
    <div className="order-report">
      <div className="head">
        <h3 className="head__title">Order Report</h3>

        <Filter 
          statuses={statuses}
          statusChangeChecked={statusCheckboxHandler}
        />
      </div>

      <div className="order-report__table">
        <div className="order-report__table-header">
          <div>Customer</div>
          <div>Menu</div>
          <div>Total Payment</div>
          <div>Status</div>
        </div>

        <div className="order-report__content">
          {data && data.map(item => (
            <OrderReportItem item={item} key={item.id} />
          ))}          
        </div>
      </div>
    </div>
  );
};
