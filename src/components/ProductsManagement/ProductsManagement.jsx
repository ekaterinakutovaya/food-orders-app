import React, { useState, useEffect } from 'react';
import { Filter } from '../UI/Filter/Filter';
import { useSelector, useDispatch } from "react-redux";

import "./ProductsManagement.scss";
import { Tabs } from '@/components';
import { categories } from "@/utils/constants.js";
import { AddNewDish, ProductCard, Button } from '@/components';
import { SvgSelector } from '@/assets/icons/SvgSelector';

export const ProductsManagement = () => {
  const dispatch = useDispatch();
  const { dishes } = useSelector(state => state.dishes);
  const { category } = useSelector(state => state.filter);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dishes && setFilteredData(dishes.filter(dish =>
      dish.categoryIdx === category
    ))

  }, [dishes, category])




  return (
    <div className="products-management">
      <div className="head">
        <h3 className="head__title">Products Management</h3>
        {/* <Filter /> */}
        <div className="filter">
          <div className="filter__head">
            <SvgSelector id='filter' />
            Manage Categories
              </div>
        </div>
      </div>

      <Tabs tabs={categories} />

      <div className="products-management__content">
        <AddNewDish />

        {filteredData && filteredData.map(item => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

      <div className="products-management__buttons">
        <Button type="secondary">Discard Changes</Button>
        <Button type="primary">Save Changes</Button>
      </div>
    </div>
  );
};
