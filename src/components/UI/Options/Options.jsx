import { useState } from 'react';

import './Options.scss';


export const Options = () => {
    const [typeOption, setTypeOption] = useState(0);

    const optionChangeHandler = (e) => {
        setTypeOption(Number(e.currentTarget.value));
    }

    return (
        <div className='options' >
            <div className="option__btn">
                <input
                    className='option__input'
                    type="radio" id="radio-1"
                    name="type"
                    checked={typeOption == 0}
                    value={0}
                    onChange={optionChangeHandler}
                />
                <label className='option__label' htmlFor="radio-1" value={0}>Dine In</label>
            </div>

            <div className="option__btn">
                <input
                    className='option__input'
                    type="radio" id="radio-2"
                    name="type" checked={typeOption == 1}
                    value={1}
                    onChange={optionChangeHandler}
                />
                <label className='option__label' htmlFor="radio-2" value={1}>To Go</label>
            </div>

            <div className="option__btn" >
                <input
                    className='option__input'
                    type="radio"
                    id="radio-3"
                    name="type"
                    checked={typeOption == 2}
                    value={2}
                    onChange={optionChangeHandler}
                />
                <label className='option__label' htmlFor="radio-3" value={2}>Delivery</label>
            </div>
        </div>
    )
}