import React, { useState, useEffect } from 'react';

import './Options.scss';

const RadioInput = ({ label, value, checked, setter }) => {

    const optionChangeHandler = (e) => {
        console.log(e.target.dataset.index);
        // setter()
    }

    return (
        // <label>
        //     <input type="radio" checked={checked == value}
        //         onChange={() => setter(value)} />
        //     <span>{label}</span>
        // </label>

        <div
            // className="option__btn active"
            className={checked ? "option__btn active" : "option_btn"}
        >
            <input
                className='option__input'
                type="radio" id="radio-1"
                name="type"
                checked={checked == value}
                onChange={() => setter(value)} />
            <label className='option__label' htmlFor="radio-1">{label}</label>
        </div>
    );
};

export const Options = () => {
    const [typeOption, setTypeOption] = useState([
        { index: 0, label: "Dine In", checked: true },
        { index: 1, label: "To Go", checked: false },
        { index: 2, label: "Delivery", checked: false },
    ]);

    const optionChangeHandler = (e) => {
        console.log(e.target.dataset.index);
        // setTypeOption(prevState => )
    }


    return (
        <fieldset className='options'>
            {typeOption.map(option => (
                <RadioInput key={option.index} label={option.label} index={option.index} checked={option.checked} setter={optionChangeHandler} />
            ))}
            {/* <RadioInput label="Dine In" value="0" checked={typeOption} setter={setTypeOption} />
            <RadioInput label="To Go" value="1" checked={typeOption} setter={setTypeOption} />
            <RadioInput label="Delivery" value="2" checked={typeOption} setter={setTypeOption} /> */}
            {/* <div className="option__btn active">
                <input className='option__input' type="radio" id="radio-1" name="type" checked={value} setter={setValue}/>
                <label className='option__label' htmlFor="radio-1">Dine In</label>
             </div>

             <div className="option__btn">
                <input className='option__input' type="radio" id="radio-1" name="type" checked={value} setter={setValue}/>
                <label className='option__label' htmlFor="radio-1">To Go</label>
             </div>

             <div className="option__btn">
                <input className='option__input' type="radio" id="radio-1" name="type" checked={value} setter={setValue}/>
                <label className='option__label' htmlFor="radio-1">Delivery</label>
             </div> */}
        </fieldset>
    )
}