import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './Dishes.scss';
import { DishCard, Dropdown } from '@/components';
import { types } from "@/utils/constants";
import { fetchDishes } from '@/store/DishesSlice';
import { setSelectedType } from "@/store/FilterSlice";

export const Dishes = () => {
  const dispatch = useDispatch();
  const { dishes } = useSelector(state => state.dishes);
  const { category, type } = useSelector(state => state.filter);
  const { searchValue } = useSelector(state => state.filter);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState(false);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    dispatch(fetchDishes());
  }, [])

  useEffect(() => {
    dishes && setFilteredData(dishes.filter(dish =>
      dish.categoryIdx === category
      &&
      dish.types.split(',').includes(type.toString())
    ))

    setDropdownLabel(prevState => types.filter(t => t.index === type)[0].label)

  }, [dishes, category, type])


  useEffect(() => {

    if (searchValue) {
      let updatedData = filteredData;

      updatedData = updatedData.filter(
        (item) =>
          item.title.toLowerCase().search(searchValue.toLowerCase().trim()) !== -1
      )

      setFilteredData(updatedData);

    } else {
      dishes && setFilteredData(dishes.filter(dish =>
        dish.categoryIdx === category
        &&
        dish.types.split(',').includes(type.toString())
      ))
    }


    return () => {
      setFilteredData([]);
    };

  }, [searchValue])

  const selectType = (e) => {
    let idx = Number(e.currentTarget.dataset.index);
    setDropdownLabel(prevState => types.filter(type => type.index === idx)[0].label);
    dispatch(setSelectedType(idx));
    setDropdownOpen(false);
  }

  return (
    <div className='dishes'>
      <div className="dishes__head">
        <h2 className='dishes__title'>Choose Dishes</h2>
        <div className="dishes__types">
          <Dropdown
            items={types}
            onClick={selectType}
            visible={dropdownOpen}
            setVisible={setDropdownOpen}
            label={dropdownLabel}
          />
        </div>
      </div>

      <div className="dishes__content">

        {filteredData && filteredData.map(item => (
          <DishCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}