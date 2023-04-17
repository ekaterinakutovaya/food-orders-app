import React from 'react';
import { Filter } from '../UI/Filter/Filter';

import "./ProductsManagement.scss";
import { Tabs } from '@/components';
import { categories } from "@/utils/constants.js";
import { AddNewDish, ProductCard } from '@/components';

export const ProductsManagement = () => {


  return (
    <div className="products-management">
      <div className="head">
        <h3 className="head__title">Products Management</h3>
        <Filter />
      </div>

      <Tabs tabs={categories}/>

      <div className="products-management__content">
      <AddNewDish/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};
