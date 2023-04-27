import React, { useState } from 'react';
import * as Icon from "react-icons/bs";
import Checkbox from "react-custom-checkbox";

import "./CustomCheckbox.scss";

export const CustomCheckbox = ({ status, changeChecked}) => {
   const {checked, label, index} = status;

    return (
        <Checkbox
            icon={<Icon.BsCheck color="#fff" size={14} />}
            name="preparing"
            checked={checked}
            onChange={() => changeChecked(index)}
            borderColor="#393c49"
            style={{ cursor: "pointer" }}
            labelStyle={{ marginLeft: 5, userSelect: "none" }}
            label={label}
            className="checkbox"
        />
    );
};
